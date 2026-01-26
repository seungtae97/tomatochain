import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import TokenSection from '../components/home/TokenSection';
import PartnerSection from '../components/home/PartnerSection';
import PerformanceSection from '../components/home/PerformanceSection';

const HomePage = () => {
    // 새로고침 시 맨 위로 스크롤
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <HeroSection />
            <FeatureSection />
            <TokenSection />
            <PartnerSection />
            <PerformanceSection />
        </>
    );
};

export default HomePage;
