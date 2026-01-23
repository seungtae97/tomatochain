import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'vi';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    ko: {
        // Navbar
        'nav.home': '홈',
        'nav.features': '소개',
        'nav.tokens': '토큰',
        'nav.partners': '파트너',
        'nav.performance': '퍼포먼스',
        'nav.community': '커뮤니티',
        'nav.launchApp': '앱 시작하기',

        // Hero
        'hero.badge': '차세대 블록체인 인프라',
        'hero.title': '토마토체인',
        'hero.description': '4,500+ TPS의 초고속 처리, 초저비용 수수료, 무한한 확장성을 경험하세요.',
        'hero.cta.start': '시작하기',
        'hero.cta.whitepaper': '백서 보기',

        // Features
        'features.title': '토마토체인 소개',
        'features.subtitle': '차세대 블록체인 인프라의 핵심 기술을 경험하세요.',
        'features.speed.title': '초고속 처리',
        'features.speed.desc': '최신 기술로 구현한 4,500+ TPS의 빠른 트랜잭션 처리',
        'features.fee.title': '초저비용 수수료',
        'features.fee.desc': '효율적인 네트워크 운영으로 매우 낮은 거래 수수료',
        'features.security.title': '강력한 보안',
        'features.security.desc': '검증된 기술과 독자적인 보안 시스템 구축',
        'features.crosschain.title': '크로스체인 호환',
        'features.crosschain.desc': '다양한 블록체인과의 호환 멀티체인 지원 (솔라나 포함)',
        'features.scale.title': '무한 확장성',
        'features.scale.desc': '혁신적인 기술을 활용한 무한한 확장 가능성',
        'features.dev.title': '개발자 친화적',
        'features.dev.desc': 'EVM 호환성과 다양한 개발 도구 지원',

        // Tokens
        'tokens.title': '토큰 소개',
        'tokens.subtitle': '토마토체인 생태계의 핵심 토큰들',
        'tokens.ttc.name': '통통코인 (TTC)',
        'tokens.ttc.desc': '토마토체인 생태계의 핵심 디지털자산',
        'tokens.ttr.name': '통통리워드 (TTR)',
        'tokens.ttr.desc': '블록체인 형태의 포인트 시스템',
        'tokens.ttco.name': '통통쿠폰 (TTCO)',
        'tokens.ttco.desc': '토마토그룹 상품 및 서비스 할인 쿠폰',
        'tokens.ttkr.name': '통통KRW (TTKR)',
        'tokens.ttkr.desc': '한국 원화 기반 스테이블코인',
        'tokens.browser.title': '토마토체인 브라우저',
        'tokens.browser.desc': 'Web3.0을 위한 차세대 블록체인 브라우저. DApp 실행, 디지털자산 관리, NFT 거래 등 모든 블록체인 활동을 하나의 브라우저에서 안전하고 편리하게 이용할 수 있습니다.',
        'tokens.browser.cta': '브라우저 시작하기',
        'tokens.whitepaper.title': '백서',
        'tokens.whitepaper.desc': '토마토체인의 기술적 아키텍처, 토큰 이코노미, 생태계 발전 계획 등 상세한 정보를 백서에서 확인하세요.',
        'tokens.whitepaper.ko': '한국어 백서',
        'tokens.whitepaper.en': 'English Whitepaper',

        // Partners
        'partners.title': '파트너 서비스',
        'partners.subtitle': '토마토체인 생태계와 함께하는 서비스들',

        // Performance
        'performance.title': 'TTC 퍼포먼스',
        'performance.subtitle': '실시간 통통코인(TTC) 시장 데이터',
        'performance.trade': 'TTC 거래하기',
        'performance.chart.note': '* 차트 데이터는 TradingView에서 제공됩니다.',

        // Social
        'social.title': '커뮤니티',
        'social.subtitle': '토마토체인과 함께하세요',

        // Footer
        'footer.desc': '초고속 처리, 초저비용, 무한 확장성을 제공하는 차세대 블록체인 인프라',
        'footer.ecosystem': '생태계',
        'footer.wallet': '지갑',
        'footer.browser': '브라우저',
        'footer.community': '커뮤니티',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.tokens': 'Tokens',
        'nav.partners': 'Partners',
        'nav.performance': 'Performance',
        'nav.community': 'Community',
        'nav.launchApp': 'Launch App',

        // Hero
        'hero.badge': 'Next-Gen Blockchain Infrastructure',
        'hero.title': 'TOMATO CHAIN',
        'hero.description': 'Experience ultra-fast 4,500+ TPS processing, near-zero fees, and infinite scalability.',
        'hero.cta.start': 'Get Started',
        'hero.cta.whitepaper': 'Whitepaper',

        // Features
        'features.title': 'About Tomato Chain',
        'features.subtitle': 'Experience the core technology of next-generation blockchain infrastructure.',
        'features.speed.title': 'Ultra-Fast Processing',
        'features.speed.desc': '4,500+ TPS transaction processing powered by cutting-edge technology',
        'features.fee.title': 'Low Transaction Fees',
        'features.fee.desc': 'Extremely low fees through efficient network operation',
        'features.security.title': 'Strong Security',
        'features.security.desc': 'Proven technology and independent security systems',
        'features.crosschain.title': 'Cross-chain Compatible',
        'features.crosschain.desc': 'Multi-chain support including Solana and seamless interoperability',
        'features.scale.title': 'Infinite Scalability',
        'features.scale.desc': 'Limitless scaling possibilities using innovative architecture',
        'features.dev.title': 'Developer Friendly',
        'features.dev.desc': 'Full EVM compatibility and extensive developer tool support',

        // Tokens
        'tokens.title': 'Token Introduction',
        'tokens.subtitle': 'Core tokens of the Tomato Chain ecosystem',
        'tokens.ttc.name': 'TongTong Coin (TTC)',
        'tokens.ttc.desc': 'Core digital asset of the Tomato Chain ecosystem',
        'tokens.ttr.name': 'TongTong Reward (TTR)',
        'tokens.ttr.desc': 'Blockchain-based point system',
        'tokens.ttco.name': 'TongTong Coupon (TTCO)',
        'tokens.ttco.desc': 'Discount coupons for Tomato Group products and services',
        'tokens.ttkr.name': 'TongTong KRW (TTKR)',
        'tokens.ttkr.desc': 'Korean Won-based stablecoin',
        'tokens.browser.title': 'Tomato Chain Browser',
        'tokens.browser.desc': 'Next-gen blockchain browser for Web3.0. Safely and conveniently use all blockchain activities including DApp execution, digital asset management, and NFT trading in one browser.',
        'tokens.browser.cta': 'Launch Browser',
        'tokens.whitepaper.title': 'Whitepaper',
        'tokens.whitepaper.desc': 'Check the whitepaper for detailed information on technical architecture, token economy, and ecosystem development plans.',
        'tokens.whitepaper.ko': 'Korean Whitepaper',
        'tokens.whitepaper.en': 'English Whitepaper',

        // Partners
        'partners.title': 'Partner Services',
        'partners.subtitle': 'Services partnering with the Tomato Chain ecosystem',

        // Performance
        'performance.title': 'TTC Performance',
        'performance.subtitle': 'Real-time TongTong Coin (TTC) market data',
        'performance.trade': 'Trade TTC',
        'performance.chart.note': '* Chart data provided by TradingView.',

        // Social
        'social.title': 'Community',
        'social.subtitle': 'Join the Tomato Chain community',

        // Footer
        'footer.desc': 'Next-generation blockchain infrastructure with ultra-fast processing, low costs, and infinite scalability',
        'footer.ecosystem': 'Ecosystem',
        'footer.wallet': 'Wallet',
        'footer.browser': 'Browser',
        'footer.community': 'Community',
    },
    zh: {
        // Navbar
        'nav.home': '首页',
        'nav.features': '特点',
        'nav.tokens': '代币',
        'nav.partners': '合作伙伴',
        'nav.performance': '性能',
        'nav.community': '社区',
        'nav.launchApp': '启动应用',

        // Hero
        'hero.badge': '下一代区块链基础设施',
        'hero.title': 'TOMATO CHAIN',
        'hero.description': '体验4,500+ TPS超快处理、超低费用和无限扩展性。',
        'hero.cta.start': '开始使用',
        'hero.cta.whitepaper': '白皮书',

        // Features
        'features.title': '关于番茄链',
        'features.subtitle': '体验下一代区块链基础设施的核心技术。',
        'features.speed.title': '超快处理',
        'features.speed.desc': '采用尖端技术实现4,500+ TPS交易处理',
        'features.fee.title': '超低费用',
        'features.fee.desc': '通过高效的网络运营实现极低的交易费用',
        'features.security.title': '强大安全',
        'features.security.desc': '经过验证的技术和独立的安全系统',
        'features.crosschain.title': '跨链兼容',
        'features.crosschain.desc': '支持包括Solana在内的多链无缝互操作',
        'features.scale.title': '无限扩展',
        'features.scale.desc': '使用创新架构实现无限扩展可能性',
        'features.dev.title': '开发者友好',
        'features.dev.desc': '完全EVM兼容和广泛的开发工具支持',

        // Tokens
        'tokens.title': '代币介绍',
        'tokens.subtitle': '番茄链生态系统的核心代币',
        'tokens.ttc.name': '通通币 (TTC)',
        'tokens.ttc.desc': '番茄链生态系统的核心数字资产',
        'tokens.ttr.name': '通通奖励 (TTR)',
        'tokens.ttr.desc': '基于区块链的积分系统',
        'tokens.ttco.name': '通通优惠券 (TTCO)',
        'tokens.ttco.desc': '番茄集团产品和服务折扣券',
        'tokens.ttkr.name': '通通KRW (TTKR)',
        'tokens.ttkr.desc': '基于韩元的稳定币',
        'tokens.browser.title': '番茄链浏览器',
        'tokens.browser.desc': 'Web3.0下一代区块链浏览器。在一个浏览器中安全便捷地使用所有区块链活动。',
        'tokens.browser.cta': '启动浏览器',
        'tokens.whitepaper.title': '白皮书',
        'tokens.whitepaper.desc': '查看白皮书了解技术架构、代币经济和生态系统发展计划的详细信息。',
        'tokens.whitepaper.ko': '韩文白皮书',
        'tokens.whitepaper.en': '英文白皮书',

        // Partners
        'partners.title': '合作伙伴服务',
        'partners.subtitle': '与番茄链生态系统合作的服务',

        // Performance
        'performance.title': 'TTC 性能',
        'performance.subtitle': '实时通通币(TTC)市场数据',
        'performance.trade': '交易TTC',
        'performance.chart.note': '* 图表数据由TradingView提供。',

        // Social
        'social.title': '社区',
        'social.subtitle': '加入番茄链社区',

        // Footer
        'footer.desc': '提供超快处理、低成本和无限扩展性的下一代区块链基础设施',
        'footer.ecosystem': '生态系统',
        'footer.wallet': '钱包',
        'footer.browser': '浏览器',
        'footer.community': '社区',
    },
    ja: {
        // Navbar
        'nav.home': 'ホーム',
        'nav.features': '特徴',
        'nav.tokens': 'トークン',
        'nav.partners': 'パートナー',
        'nav.performance': 'パフォーマンス',
        'nav.community': 'コミュニティ',
        'nav.launchApp': 'アプリ起動',

        // Hero
        'hero.badge': '次世代ブロックチェーンインフラ',
        'hero.title': 'TOMATO CHAIN',
        'hero.description': '4,500+ TPSの超高速処理、超低コスト手数料、無限のスケーラビリティを体験してください。',
        'hero.cta.start': '始める',
        'hero.cta.whitepaper': 'ホワイトペーパー',

        // Features
        'features.title': 'トマトチェーンについて',
        'features.subtitle': '次世代ブロックチェーンインフラのコア技術を体験してください。',
        'features.speed.title': '超高速処理',
        'features.speed.desc': '最先端技術による4,500+ TPSのトランザクション処理',
        'features.fee.title': '超低コスト手数料',
        'features.fee.desc': '効率的なネットワーク運営による極めて低い取引手数料',
        'features.security.title': '強力なセキュリティ',
        'features.security.desc': '実績のある技術と独自のセキュリティシステム',
        'features.crosschain.title': 'クロスチェーン互換',
        'features.crosschain.desc': 'Solanaを含むマルチチェーンサポートとシームレスな相互運用性',
        'features.scale.title': '無限のスケーラビリティ',
        'features.scale.desc': '革新的なアーキテクチャによる無限の拡張可能性',
        'features.dev.title': '開発者フレンドリー',
        'features.dev.desc': '完全なEVM互換性と豊富な開発ツールサポート',

        // Tokens
        'tokens.title': 'トークン紹介',
        'tokens.subtitle': 'トマトチェーンエコシステムのコアトークン',
        'tokens.ttc.name': 'トントンコイン (TTC)',
        'tokens.ttc.desc': 'トマトチェーンエコシステムのコアデジタル資産',
        'tokens.ttr.name': 'トントンリワード (TTR)',
        'tokens.ttr.desc': 'ブロックチェーンベースのポイントシステム',
        'tokens.ttco.name': 'トントンクーポン (TTCO)',
        'tokens.ttco.desc': 'トマトグループ製品・サービスの割引クーポン',
        'tokens.ttkr.name': 'トントンKRW (TTKR)',
        'tokens.ttkr.desc': '韓国ウォンベースのステーブルコイン',
        'tokens.browser.title': 'トマトチェーンブラウザ',
        'tokens.browser.desc': 'Web3.0のための次世代ブロックチェーンブラウザ。一つのブラウザですべてのブロックチェーン活動を安全・便利に利用できます。',
        'tokens.browser.cta': 'ブラウザ起動',
        'tokens.whitepaper.title': 'ホワイトペーパー',
        'tokens.whitepaper.desc': '技術アーキテクチャ、トークンエコノミー、エコシステム開発計画の詳細はホワイトペーパーをご確認ください。',
        'tokens.whitepaper.ko': '韓国語版',
        'tokens.whitepaper.en': '英語版',

        // Partners
        'partners.title': 'パートナーサービス',
        'partners.subtitle': 'トマトチェーンエコシステムと提携するサービス',

        // Performance
        'performance.title': 'TTC パフォーマンス',
        'performance.subtitle': 'リアルタイムトントンコイン(TTC)市場データ',
        'performance.trade': 'TTC取引',
        'performance.chart.note': '* チャートデータはTradingViewから提供されています。',

        // Social
        'social.title': 'コミュニティ',
        'social.subtitle': 'トマトチェーンコミュニティに参加',

        // Footer
        'footer.desc': '超高速処理、低コスト、無限のスケーラビリティを提供する次世代ブロックチェーンインフラ',
        'footer.ecosystem': 'エコシステム',
        'footer.wallet': 'ウォレット',
        'footer.browser': 'ブラウザ',
        'footer.community': 'コミュニティ',
    },
    vi: {
        // Navbar
        'nav.home': 'Trang chủ',
        'nav.features': 'Tính năng',
        'nav.tokens': 'Token',
        'nav.partners': 'Đối tác',
        'nav.performance': 'Hiệu suất',
        'nav.community': 'Cộng đồng',
        'nav.launchApp': 'Khởi chạy ứng dụng',

        // Hero
        'hero.badge': 'Cơ sở hạ tầng Blockchain thế hệ mới',
        'hero.title': 'TOMATO CHAIN',
        'hero.description': 'Trải nghiệm xử lý siêu nhanh 4,500+ TPS, phí gần như bằng không và khả năng mở rộng vô hạn.',
        'hero.cta.start': 'Bắt đầu',
        'hero.cta.whitepaper': 'Sách trắng',

        // Features
        'features.title': 'Giới thiệu Tomato Chain',
        'features.subtitle': 'Trải nghiệm công nghệ cốt lõi của cơ sở hạ tầng blockchain thế hệ mới.',
        'features.speed.title': 'Xử lý siêu nhanh',
        'features.speed.desc': 'Xử lý giao dịch 4,500+ TPS với công nghệ tiên tiến',
        'features.fee.title': 'Phí siêu thấp',
        'features.fee.desc': 'Phí giao dịch cực thấp thông qua vận hành mạng hiệu quả',
        'features.security.title': 'Bảo mật mạnh mẽ',
        'features.security.desc': 'Công nghệ đã được chứng minh và hệ thống bảo mật độc lập',
        'features.crosschain.title': 'Tương thích đa chuỗi',
        'features.crosschain.desc': 'Hỗ trợ đa chuỗi bao gồm Solana và khả năng tương tác liền mạch',
        'features.scale.title': 'Mở rộng vô hạn',
        'features.scale.desc': 'Khả năng mở rộng không giới hạn với kiến trúc sáng tạo',
        'features.dev.title': 'Thân thiện với nhà phát triển',
        'features.dev.desc': 'Tương thích hoàn toàn EVM và hỗ trợ công cụ phát triển đa dạng',

        // Tokens
        'tokens.title': 'Giới thiệu Token',
        'tokens.subtitle': 'Các token cốt lõi của hệ sinh thái Tomato Chain',
        'tokens.ttc.name': 'TongTong Coin (TTC)',
        'tokens.ttc.desc': 'Tài sản số cốt lõi của hệ sinh thái Tomato Chain',
        'tokens.ttr.name': 'TongTong Reward (TTR)',
        'tokens.ttr.desc': 'Hệ thống điểm dựa trên blockchain',
        'tokens.ttco.name': 'TongTong Coupon (TTCO)',
        'tokens.ttco.desc': 'Phiếu giảm giá cho sản phẩm và dịch vụ Tomato Group',
        'tokens.ttkr.name': 'TongTong KRW (TTKR)',
        'tokens.ttkr.desc': 'Stablecoin dựa trên Won Hàn Quốc',
        'tokens.browser.title': 'Trình duyệt Tomato Chain',
        'tokens.browser.desc': 'Trình duyệt blockchain thế hệ mới cho Web3.0. Sử dụng tất cả hoạt động blockchain an toàn và thuận tiện trong một trình duyệt.',
        'tokens.browser.cta': 'Khởi chạy trình duyệt',
        'tokens.whitepaper.title': 'Sách trắng',
        'tokens.whitepaper.desc': 'Xem sách trắng để biết thông tin chi tiết về kiến trúc kỹ thuật, nền kinh tế token và kế hoạch phát triển hệ sinh thái.',
        'tokens.whitepaper.ko': 'Sách trắng tiếng Hàn',
        'tokens.whitepaper.en': 'Sách trắng tiếng Anh',

        // Partners
        'partners.title': 'Dịch vụ đối tác',
        'partners.subtitle': 'Các dịch vụ hợp tác với hệ sinh thái Tomato Chain',

        // Performance
        'performance.title': 'Hiệu suất TTC',
        'performance.subtitle': 'Dữ liệu thị trường TongTong Coin (TTC) thời gian thực',
        'performance.trade': 'Giao dịch TTC',
        'performance.chart.note': '* Dữ liệu biểu đồ được cung cấp bởi TradingView.',

        // Social
        'social.title': 'Cộng đồng',
        'social.subtitle': 'Tham gia cộng đồng Tomato Chain',

        // Footer
        'footer.desc': 'Cơ sở hạ tầng blockchain thế hệ mới với xử lý siêu nhanh, chi phí thấp và khả năng mở rộng vô hạn',
        'footer.ecosystem': 'Hệ sinh thái',
        'footer.wallet': 'Ví',
        'footer.browser': 'Trình duyệt',
        'footer.community': 'Cộng đồng',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('ko');

    useEffect(() => {
        const savedLang = localStorage.getItem('language') as Language;
        if (savedLang && translations[savedLang]) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const languageNames: Record<Language, string> = {
    ko: '한국어',
    en: 'English',
    zh: '中文',
    ja: '日本語',
    vi: 'Tiếng Việt',
};
