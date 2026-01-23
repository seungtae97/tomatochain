import { useEffect, useState, useCallback } from 'react';
import { ExternalLink, TrendingUp, TrendingDown, Coins, RefreshCw, CircleDollarSign, Activity, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface TokenData {
    price: number;
    priceChange24h: number;
    volume24h: number;
    high24h: number;
    low24h: number;
}

// TTC 토큰 정보 (고정값)
const TOKEN_INFO = {
    totalSupply: 1_000_000_000, // 10억 TTC
    circulatingSupply: 850_000_000, // 8.5억 TTC (예시)
};

// 대략적인 USD -> KRW 환율 (실시간 환율 API를 사용할 수도 있음)
const USD_KRW_RATE = 1450;

const PerformanceSection = () => {
    const { t, language } = useLanguage();
    const [tokenData, setTokenData] = useState<TokenData | null>(null);
    const [loading, setLoading] = useState(true);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    // MEXC API에서 TTC 가격 데이터 가져오기
    const fetchTokenData = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.mexc.com/api/v3/ticker/24hr?symbol=TTCOINUSDT');
            const data = await response.json();

            setTokenData({
                price: parseFloat(data.lastPrice),
                priceChange24h: parseFloat(data.priceChangePercent),
                volume24h: parseFloat(data.quoteVolume),
                high24h: parseFloat(data.highPrice),
                low24h: parseFloat(data.lowPrice),
            });
            setLastUpdated(new Date());
        } catch (error) {
            console.error('Failed to fetch token data:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTokenData();
        // 30초마다 데이터 갱신
        const interval = setInterval(fetchTokenData, 30000);
        return () => clearInterval(interval);
    }, [fetchTokenData]);

    // Load TradingView widget script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            new window.TradingView.widget({
                "width": "100%",
                "height": 500,
                "symbol": "MEXC:TTCOINUSDT",
                "interval": "D",
                "timezone": "Asia/Seoul",
                "theme": "dark",
                "style": "1",
                "locale": "ko",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "currency_code": "KRW",
                "container_id": "tradingview_widget"
            });
        };
        document.getElementById('tradingview-container')?.appendChild(script);

        return () => { }
    }, []);

    const exchanges = [
        { name: '고팍스', url: 'https://www.gopax.co.kr/exchange/ttc-krw', color: 'bg-blue-600' },
        { name: '포블', url: 'https://www.foblgate.com/trade?pairName=TTC/USDT', color: 'bg-purple-600' },
        { name: 'MEXC', url: 'https://www.mexc.com/exchange/ttcoin_USDT', color: 'bg-green-500' },
        { name: 'LBank', url: 'https://www.lbank.info/exchange/ttc/usdt', color: 'bg-yellow-600' },
    ];

    // 한국어 숫자 포맷 (억, 만 단위)
    const formatNumberKR = (num: number) => {
        if (num >= 100_000_000) {
            return (num / 100_000_000).toFixed(1) + '억';
        } else if (num >= 10_000) {
            return (num / 10_000).toFixed(1) + '만';
        } else if (num >= 1_000) {
            return num.toLocaleString('ko-KR');
        }
        return num.toFixed(2);
    };

    // 원화 포맷
    const formatKRW = (num: number) => {
        return new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(num);
    };

    // USD를 KRW로 변환
    const priceInKRW = tokenData ? tokenData.price * USD_KRW_RATE : 0;

    const marketCap = tokenData ? tokenData.price * TOKEN_INFO.circulatingSupply : 0;

    const statsLabels: Record<string, Record<string, string>> = {
        ko: {
            price: '현재 가격',
            marketCap: '시가총액',
            totalSupply: '총 발행량',
            circulatingSupply: '유통량',
            volume24h: '24시간 거래량',
            high24h: '24시간 최고가',
            low24h: '24시간 최저가',
            lastUpdated: '마지막 업데이트',
        },
        en: {
            price: 'Current Price',
            marketCap: 'Market Cap',
            totalSupply: 'Total Supply',
            circulatingSupply: 'Circulating Supply',
            volume24h: '24h Volume',
            high24h: '24h High',
            low24h: '24h Low',
            lastUpdated: 'Last Updated',
        },
        zh: {
            price: '当前价格',
            marketCap: '市值',
            totalSupply: '总发行量',
            circulatingSupply: '流通量',
            volume24h: '24小时交易量',
            high24h: '24小时最高价',
            low24h: '24小时最低价',
            lastUpdated: '最后更新',
        },
        ja: {
            price: '現在価格',
            marketCap: '時価総額',
            totalSupply: '総発行量',
            circulatingSupply: '流通量',
            volume24h: '24時間取引量',
            high24h: '24時間最高値',
            low24h: '24時間最安値',
            lastUpdated: '最終更新',
        },
        vi: {
            price: 'Giá hiện tại',
            marketCap: 'Vốn hóa thị trường',
            totalSupply: 'Tổng cung',
            circulatingSupply: 'Cung lưu hành',
            volume24h: 'Khối lượng 24h',
            high24h: 'Cao nhất 24h',
            low24h: 'Thấp nhất 24h',
            lastUpdated: 'Cập nhật lần cuối',
        },
    };

    const labels = statsLabels[language] || statsLabels.en;

    return (
        <section id="performance" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('performance.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        {t('performance.subtitle')}
                    </p>
                </div>

                {/* 실시간 토큰 정보 카드 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {/* 현재 가격 */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-6 rounded-2xl border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                            <CircleDollarSign className="w-5 h-5 text-primary" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{labels.price}</span>
                        </div>
                        {loading ? (
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {tokenData ? formatKRW(priceInKRW) : '-'}
                                </span>
                                {tokenData && (
                                    <span className={`flex items-center text-sm font-medium ${tokenData.priceChange24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {tokenData.priceChange24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                        {tokenData.priceChange24h.toFixed(2)}%
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 시가총액 */}
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 dark:from-blue-500/20 dark:to-blue-500/10 p-6 rounded-2xl border border-blue-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <BarChart3 className="w-5 h-5 text-blue-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{labels.marketCap}</span>
                        </div>
                        {loading ? (
                            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        ) : (
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                {formatKRW(marketCap * USD_KRW_RATE)}
                            </span>
                        )}
                    </div>

                    {/* 총 발행량 */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <Coins className="w-5 h-5 text-purple-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{labels.totalSupply}</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {formatNumberKR(TOKEN_INFO.totalSupply)} TTC
                        </span>
                    </div>

                    {/* 유통량 */}
                    <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 dark:from-green-500/20 dark:to-green-500/10 p-6 rounded-2xl border border-green-500/20">
                        <div className="flex items-center gap-2 mb-2">
                            <Activity className="w-5 h-5 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{labels.circulatingSupply}</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {formatNumberKR(TOKEN_INFO.circulatingSupply)} TTC
                        </span>
                    </div>
                </div>

                {/* 업데이트 정보 */}
                <div className="flex justify-end items-center gap-2 mb-4">
                    <button
                        onClick={fetchTokenData}
                        disabled={loading}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors disabled:opacity-50"
                    >
                        <RefreshCw size={12} className={loading ? 'animate-spin' : ''} />
                        {lastUpdated && (
                            <span>{labels.lastUpdated}: {lastUpdated.toLocaleTimeString()}</span>
                        )}
                    </button>
                </div>

                <div className="bg-gray-100 dark:bg-dark-surface p-4 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 overflow-hidden mb-12">
                    <div id="tradingview-container" className="w-full relative z-0">
                        <div id="tradingview_widget" className="w-full h-[500px]"></div>
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2">
                        {t('performance.chart.note')}
                    </p>
                </div>

                <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                    {t('performance.trade')}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {exchanges.map((exchange) => (
                        <a
                            key={exchange.name}
                            href={exchange.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-dark-surface hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all group"
                        >
                            <span className={`w-3 h-3 rounded-full ${exchange.color}`}></span>
                            <span className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                {exchange.name}
                            </span>
                            <ExternalLink size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PerformanceSection;
