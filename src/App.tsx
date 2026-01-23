import { useEffect } from 'react'
import HeroSection from './components/home/HeroSection'
import FeatureSection from './components/home/FeatureSection'
import TokenSection from './components/home/TokenSection'
import PartnerSection from './components/home/PartnerSection'
import PerformanceSection from './components/home/PerformanceSection'
import Layout from './components/layout/Layout'

function App() {
  // 새로고침 시 맨 위로 스크롤
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <TokenSection />
      <PartnerSection />
      <PerformanceSection />
    </Layout>
  )
}

export default App
