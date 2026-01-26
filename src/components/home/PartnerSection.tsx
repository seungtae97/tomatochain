import { MessageCircle, Wallet, ShoppingBag, Newspaper, TrendingUp, GraduationCap, Briefcase, Ticket, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

const partners = [
    { name: '통통메신저', icon: MessageCircle, color: 'from-blue-500 to-cyan-500', url: 'https://tongtong.chat/maintongtongbrand/' },
    { name: '통통지갑', icon: Wallet, color: 'from-purple-500 to-indigo-500', url: 'https://ttwallet.io/' },
    { name: '통통몰', icon: ShoppingBag, color: 'from-pink-500 to-rose-500', url: 'https://www.tongtongmall.net/main' },
    { name: '뉴스토마토', icon: Newspaper, color: 'from-red-500 to-rose-500', url: 'https://www.newstomato.com/' },
    { name: '증권통', icon: TrendingUp, color: 'from-indigo-500 to-blue-500', url: 'https://www.tomato.co.kr/' },
    { name: '토마토패스', icon: GraduationCap, color: 'from-yellow-500 to-orange-500', url: 'https://www.tomatopass.com/main.do' },
    { name: '투자클럽', icon: Briefcase, color: 'from-slate-500 to-gray-600', url: 'https://www.etomato.com/home/' },
    { name: '티켓통', icon: Ticket, color: 'from-fuchsia-500 to-pink-500', url: 'https://www.tickettong.net' },
];

const socialLinks = [
    {
        name: 'Linktree',
        url: 'https://linktr.ee/tomatochain',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M13.511 5.853l-1.511-5.853-1.511 5.853h-3.489l4.5 9.047-3.5 9.1h4l1.5-3.9 1.5 3.9h4l-3.5-9.1 4.5-9.047z" />
                {/* Simplified Tree/Similar shape or standard Linktree logo path */}
                <path d="M12 0L9 6H2l8 8-4 10h6l2-4 2 4h6l-4-10 8-8h-7z" fill="currentColor" />
                {/* Actually Linktree is a tree shape. Let's use a generic generic tree/link icon or precise path if known. 
                   Standard Linktree: 
                   M10.873 13.914h-5.064l2.13-2.657h-3.238l5.228-6.529v-4.728h4.143v4.728l5.228 6.529h-3.238l2.13 2.657h-5.064v10.086h-2.253z
                   This looks like a tree. 
                */}
                <path d="M10.873 13.914h-5.064l2.13-2.657h-3.238l5.228-6.529v-4.728h4.143v4.728l5.228 6.529h-3.238l2.13 2.657h-5.064v10.086h-2.253z" />
            </svg>
        )
    },
    {
        name: 'X (Twitter)',
        url: 'https://twitter.com/TomatoChain',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        )
    },
    {
        name: 'Telegram',
        url: 'https://t.me/tomatochain',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        )
    },
];

const PartnerSection = () => {
    const { t } = useLanguage();

    return (
        <section id="partners" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('partners.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('partners.subtitle')}
                    </p>
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {partners.map((partner, index) => (
                        <motion.a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-surface rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group cursor-pointer"
                        >
                            <div className={`mb-3 p-3 rounded-xl bg-gradient-to-br ${partner.color} shadow-lg group-hover:scale-110 transition-transform`}>
                                <partner.icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300 text-center group-hover:text-primary transition-colors">
                                {partner.name}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Social Links */}
                <div id="community" className="text-center">
                    <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                        {t('social.title')}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 px-6 py-4 bg-gray-100 dark:bg-dark-surface rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-primary hover:border-primary hover:text-white transition-all group"
                            >
                                {link.icon}
                                <span className="font-bold text-gray-900 dark:text-white group-hover:text-white">
                                    {link.name}
                                </span>
                                <ExternalLink size={18} className="text-gray-400 group-hover:text-white" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
