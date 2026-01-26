import { useLanguage } from '../../i18n/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-100 dark:bg-dark-surface py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                            TOMATO CHAIN
                        </span>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
                            {t('footer.desc')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                            {t('footer.ecosystem')}
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="#" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                    {t('footer.wallet')}
                                </a>
                            </li>
                            <li>
                                <a href="https://browser.tongtongchain.io/#/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                    {t('footer.browser')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 tracking-wider uppercase">
                            {t('footer.community')}
                        </h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <a href="https://linktr.ee/tomatochain" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                    Linktree
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/TomatoChain" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                    X
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/tomatochain" className="text-base text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                    Telegram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex items-center justify-between">
                    <p className="text-base text-gray-500 dark:text-gray-500">
                        &copy; {new Date().getFullYear()} Tomato Chain. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
