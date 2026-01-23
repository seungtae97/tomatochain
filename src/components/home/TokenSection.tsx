import { Coins, Gift, Tag, CircleDollarSign, ExternalLink, FileText, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

const TokenSection = () => {
    const { t } = useLanguage();

    const tokens = [
        {
            name: t('tokens.ttc.name'),
            description: t('tokens.ttc.desc'),
            icon: Coins,
            color: 'from-primary to-red-600',
        },
        {
            name: t('tokens.ttr.name'),
            description: t('tokens.ttr.desc'),
            icon: Gift,
            color: 'from-purple-500 to-indigo-600',
        },
        {
            name: t('tokens.ttco.name'),
            description: t('tokens.ttco.desc'),
            icon: Tag,
            color: 'from-green-500 to-emerald-600',
        },
        {
            name: t('tokens.ttkr.name'),
            description: t('tokens.ttkr.desc'),
            icon: CircleDollarSign,
            color: 'from-blue-500 to-cyan-600',
        },
    ];

    return (
        <section id="tokens" className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('tokens.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('tokens.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {tokens.map((token, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 group overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${token.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${token.color} w-14 h-14 flex items-center justify-center shadow-lg`}>
                                <token.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                {token.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {token.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Browser & Whitepaper Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Browser Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 p-8 rounded-2xl border border-primary/20"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-primary/20">
                                <Globe className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {t('tokens.browser.title')}
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {t('tokens.browser.desc')}
                        </p>
                        <a
                            href="https://browser.tongtongchain.io/#/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-all"
                        >
                            {t('tokens.browser.cta')}
                            <ExternalLink size={18} />
                        </a>
                    </motion.div>

                    {/* Whitepaper Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-gray-200 dark:bg-gray-700">
                                <FileText className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {t('tokens.whitepaper.title')}
                            </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            {t('tokens.whitepaper.desc')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://ttcoin.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-bold transition-all"
                            >
                                {t('tokens.whitepaper.ko')}
                                <ExternalLink size={18} />
                            </a>
                            <a
                                href="https://ttcoin.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 rounded-lg font-bold transition-all"
                            >
                                {t('tokens.whitepaper.en')}
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
