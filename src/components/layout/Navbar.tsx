import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';
import { LanguageSelector } from '../theme/LanguageSelector';
import { useLanguage } from '../../i18n/LanguageContext';
import logo from '../../assets/coin_logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), href: '#' },
        { name: t('nav.features'), href: '#features' },
        { name: t('nav.tokens'), href: '#tokens' },
        { name: t('nav.partners'), href: '#partners' },
        { name: t('nav.performance'), href: '#performance' },
        { name: t('nav.community'), href: '#community' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white dark:bg-dark-bg/95 backdrop-blur-md shadow-lg'
                : 'bg-white dark:bg-black/50 backdrop-blur-sm'
                }`}
        >
            {/* Top Header Bar */}
            <div className={`w-full bg-[#a82127] dark:bg-black/80 text-white/90 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-8'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end gap-6 text-xs font-medium tracking-wide">
                    <a href="https://tomato.co.kr/tongtong" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">통통</a>
                    <a href="https://ttwallet.io/" className="hover:text-primary transition-colors">토마토월렛</a>
                    <a href="#" className="hover:text-primary transition-colors">토마토체인</a>
                </div>
            </div>

            {/* Main Nav Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2">
                            <img src={logo} alt="Tomato Chain Logo" className="h-8 w-auto" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">

                            </span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="hidden md:flex items-center gap-2">
                        <LanguageSelector />
                        <ThemeToggle />
                        <a
                            href="https://tomato.co.kr/tongtong"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg hover:shadow-primary/50"
                        >
                            증권통
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <LanguageSelector />
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div >
            </div >

            {/* Mobile Nav */}
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white dark:bg-dark-surface border-b border-gray-200 dark:border-gray-800 overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-4">
                                    <a
                                        href="https://tomato.co.kr/tongtong"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-lg"
                                    >
                                        Service
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </nav >
    );
};

export default Navbar;
