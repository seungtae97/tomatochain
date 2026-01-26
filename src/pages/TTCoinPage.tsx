import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Coins,
    ArrowRightLeft,
    Shield,
    Zap,
    Globe,
    FileText,

    Newspaper,
    TrendingUp,
    Wallet,
    CreditCard,
    Image as ImageIcon,
    Download,
    MessageCircle,
    ShoppingBag,
    GraduationCap,
    Briefcase,
    Ticket
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// @ts-ignore

const TTCoinPage = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState('about');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: CreditCard,
            titleKey: 'ttcoin.feature.fee.title',
            descKey: 'ttcoin.feature.fee.desc',
            color: 'from-primary to-primary-light',
        },
        {
            icon: ArrowRightLeft,
            titleKey: 'ttcoin.feature.p2p.title',
            descKey: 'ttcoin.feature.p2p.desc',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Shield,
            titleKey: 'ttcoin.feature.security.title',
            descKey: 'ttcoin.feature.security.desc',
            color: 'from-purple-500 to-indigo-500',
        },
        {
            icon: Coins,
            titleKey: 'ttcoin.feature.point.title',
            descKey: 'ttcoin.feature.point.desc',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Zap,
            titleKey: 'ttcoin.feature.speed.title',
            descKey: 'ttcoin.feature.speed.desc',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Globe,
            titleKey: 'ttcoin.feature.media.title',
            descKey: 'ttcoin.feature.media.desc',
            color: 'from-pink-500 to-rose-500',
        },
    ];

    const partners = [
        { name: '통통메신저', url: 'https://tongtong.chat/maintongtongbrand/', icon: MessageCircle },
        { name: '통통지갑', url: 'https://ttwallet.io/', icon: Wallet },
        { name: '통통몰', url: 'https://www.tongtongmall.net/main', icon: ShoppingBag },
        { name: '뉴스토마토', url: 'https://www.newstomato.com/', icon: Newspaper },
        { name: '증권통', url: 'https://www.tomato.co.kr/', icon: TrendingUp },
        { name: '토마토패스', url: 'https://www.tomatopass.com/main.do', icon: GraduationCap },
        { name: '투자클럽', url: 'https://www.etomato.com/home/', icon: Briefcase },
        { name: '티켓통', url: 'https://www.tickettong.net', icon: Ticket },
    ];

    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'nft', label: 'NFT' },
        { id: 'partner', label: 'Partner' },
    ];

    return (
        <div className="pt-24 min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
            {/* Hero Section & Tabs Header */}
            <section className="bg-white dark:bg-dark-surface shadow-sm pt-10 pb-4 md:pt-16 md:pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                                TTCOIN
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {t('ttcoin.hero.subtitle')}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
                        <nav className="flex -mb-px space-x-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-lg transition-colors
                    ${activeTab === tab.id
                                            ? 'border-primary text-primary'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                                        }
                  `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'about' && (
                        <motion.div
                            key="about"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* YouTube Video */}
                            <div className="mb-20">
                                <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/epqZKkLZVgs" title="TongTongcoin" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-20">
                                <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">{t('ttcoin.features.title')}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
                                        >
                                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                                                <feature.icon className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                                {t(feature.titleKey)}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                {t(feature.descKey)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Whitepaper Download */}
                            <div className="mb-20 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-dark-surface dark:to-black rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
                                <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h2 className="text-3xl font-bold mb-4">{t('ttcoin.whitepaper.title')}</h2>
                                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                    {t('ttcoin.whitepaper.desc')}
                                </p>
                                <a
                                    href="/TongtongCoin_WhitePaper_Korean_v3.0.pdf"
                                    download="TongtongCoin_WhitePaper_Korean_v3.0.pdf"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/50"
                                >
                                    <Download size={20} />
                                    {t('ttcoin.whitepaper.download')}
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'nft' && (
                        <motion.div
                            key="nft"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <div className="max-w-4xl mx-auto bg-white dark:bg-dark-surface rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-800">
                                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <ImageIcon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">{t('ttcoin.nft.title')}</h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    {t('ttcoin.nft.desc')}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                    <div className="p-6 bg-gray-50 dark:bg-dark-bg rounded-xl">
                                        <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{t('ttcoin.nft.secure')}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('ttcoin.nft.secureDesc')}</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 dark:bg-dark-bg rounded-xl">
                                        <ArrowRightLeft className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{t('ttcoin.nft.trade')}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('ttcoin.nft.tradeDesc')}</p>
                                    </div>
                                    <div className="p-6 bg-gray-50 dark:bg-dark-bg rounded-xl">
                                        <Globe className="w-8 h-8 text-green-500 mx-auto mb-4" />
                                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{t('ttcoin.nft.global')}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('ttcoin.nft.globalDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'partner' && (
                        <motion.div
                            key="partner"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('ttcoin.partner.title')}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400">
                                    {t('ttcoin.partner.desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {partners.map((partner, index) => (
                                    <motion.a
                                        key={index}
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center gap-4 p-8 bg-white dark:bg-dark-surface rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <partner.icon className="w-8 h-8 text-primary" />
                                        </div>
                                        <span className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                            {partner.name}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TTCoinPage;
