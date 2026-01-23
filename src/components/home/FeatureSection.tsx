import { Zap, Banknote, Shield, Globe, Layers, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

const FeatureSection = () => {
    const { t } = useLanguage();

    const features = [
        {
            title: t('features.speed.title'),
            description: t('features.speed.desc'),
            icon: Zap,
            color: 'text-yellow-500',
        },
        {
            title: t('features.fee.title'),
            description: t('features.fee.desc'),
            icon: Banknote,
            color: 'text-green-500',
        },
        {
            title: t('features.security.title'),
            description: t('features.security.desc'),
            icon: Shield,
            color: 'text-blue-500',
        },
        {
            title: t('features.crosschain.title'),
            description: t('features.crosschain.desc'),
            icon: Globe,
            color: 'text-purple-500',
        },
        {
            title: t('features.scale.title'),
            description: t('features.scale.desc'),
            icon: Layers,
            color: 'text-indigo-500',
        },
        {
            title: t('features.dev.title'),
            description: t('features.dev.desc'),
            icon: Code,
            color: 'text-pink-500',
        },
    ];

    return (
        <section id="features" className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('features.title')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 group hover:-translate-y-2"
                        >
                            <div className={`mb-6 p-4 rounded-full bg-gray-100 dark:bg-gray-800 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
