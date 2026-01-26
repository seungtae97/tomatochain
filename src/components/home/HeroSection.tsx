import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import heroVideo from '../../assets/hero_vid.mp4';

const HeroSection = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [isExpanding, setIsExpanding] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        // Initial setup
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';

        // Timing sequence
        const expandTimer = setTimeout(() => {
            setIsExpanding(true);
        }, 1200); // Start expanding slightly earlier

        const endTimer = setTimeout(() => {
            setShowIntro(false);
            document.body.style.overflow = 'auto'; // Restore scroll
        }, 2700); // 1.2s delay + 1.5s animation

        return () => {
            clearTimeout(expandTimer);
            clearTimeout(endTimer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const layout = isMobile ? {
        viewBox: "0 0 1080 1920",
        centerX: 540,
        centerY: 960,
        fontSize: 140,
        circleRadius: 42,
        textOffset: 55,
        maskYOffset: 12
    } : {
        viewBox: "0 0 1920 1080",
        centerX: 960,
        centerY: 540,
        fontSize: 200,
        circleRadius: 52,
        textOffset: 80,
        maskYOffset: 18
    };

    return (
        <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-black">

            {/* 1. Static Background Video - The destination */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
            </div>

            {/* 2. Intro Overlay - The "Window" */}
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* SVG Cutout Overlay */}
                        <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox={layout.viewBox}
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                <mask id="text-mask">
                                    {/* White = Visible (The black screen) */}
                                    <rect x="0" y="0" width={isMobile ? 1080 : 1920} height={isMobile ? 1920 : 1080} fill="white" />

                                    {/* Black = Invisible (The Hole/Window) */}
                                    {/* We use a simple CIRCLE for the hole, ensuring it's in the O's counter */}
                                    <motion.g
                                        animate={{ scale: isExpanding ? 150 : 1 }}
                                        transition={{ duration: 2.0, ease: [0.7, 0, 0.3, 1] }}
                                        style={{
                                            transformOrigin: `${layout.centerX}px ${layout.centerY}px`,
                                            transformBox: 'view-box'
                                        }}
                                    >
                                        <circle
                                            cx={layout.centerX}
                                            cy={layout.centerY - layout.maskYOffset}
                                            r={layout.circleRadius}
                                            fill="black"
                                        />
                                    </motion.g>
                                </mask>
                            </defs>

                            {/* The Black Overlay Screen with Hole */}
                            <rect
                                x="0"
                                y="0"
                                width={isMobile ? 1080 : 1920}
                                height={isMobile ? 1920 : 1080}
                                fill="black"
                                mask="url(#text-mask)"
                            />

                            {/* The White Text Overlay */}
                            <motion.g
                                animate={{
                                    scale: isExpanding ? 150 : 1,
                                    opacity: isExpanding ? 0 : 1
                                }}
                                transition={{
                                    duration: 2.0,
                                    ease: [0.7, 0, 0.3, 1],
                                }}
                                style={{
                                    transformOrigin: `${layout.centerX}px ${layout.centerY}px`,
                                    transformBox: 'view-box'
                                }}
                            >
                                {/* Left Side: TOMAT */}
                                <text
                                    x={layout.centerX - layout.textOffset}
                                    y={layout.centerY}
                                    textAnchor="end"
                                    dominantBaseline="middle"
                                    fontSize={layout.fontSize}
                                    fontFamily="Inter, sans-serif"
                                    fontWeight="900"
                                    fill="white"
                                    letterSpacing="-0.05em"
                                >
                                    TOMAT
                                </text>

                                {/* Center: O */}
                                <text
                                    x={layout.centerX}
                                    y={layout.centerY}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fontSize={layout.fontSize}
                                    fontFamily="Inter, sans-serif"
                                    fontWeight="900"
                                    fill="white"
                                    letterSpacing="-0.05em"
                                >
                                    O
                                </text>

                                {/* Right Side: CHAIN */}
                                <text
                                    x={layout.centerX + layout.textOffset}
                                    y={layout.centerY}
                                    textAnchor="start"
                                    dominantBaseline="middle"
                                    fontSize={layout.fontSize}
                                    fontFamily="Inter, sans-serif"
                                    fontWeight="900"
                                    fill="white"
                                    letterSpacing="-0.05em"
                                >
                                    CHAIN
                                </text>
                            </motion.g>
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content (Standard) */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{
                    opacity: showIntro ? 0 : 1,
                    y: showIntro ? 40 : 0
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="inline-block py-2 px-4 rounded-full bg-primary/20 border border-primary text-primary text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm">
                    {t('hero.badge')}
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight flex flex-col items-center">
                    <span className="text-primary">{t('hero.title')}</span>
                    <span className="text-2xl md:text-4xl text-white mt-2 font-medium">(ttchain 3.0)</span>
                </h2>
                <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    {t('hero.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/ttcoin" className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(168,33,39,0.5)]">
                        {t('hero.cta.start')}
                    </Link>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: showIntro ? 0 : 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-2 bg-white rounded-full mt-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                </div>
            </motion.div>

        </section>
    );
};

export default HeroSection;
