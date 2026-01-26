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
        'hero.title': 'TOMATOCHAIN',
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
        'features.crosschain.desc': '아발란체 ICM 기술 활용하 자유로운 자산 이동',
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
        'footer.wallet': '토마토월렛',
        'footer.browser': '브라우저',
        'footer.community': '커뮤니티',

        // TTCoin Page
        'ttcoin.hero.subtitle': '통통코인 생태계를 소개합니다',
        'ttcoin.hero.desc': '기존 결제 시스템의 거래 수수료를 획기적으로 줄이고, 마일리지/포인트를 대체하는 탈중앙화 블록체인 플랫폼',
        'ttcoin.cta.website': '공식 웹사이트',
        'ttcoin.features.title': '주요 기능',
        'ttcoin.features.desc': 'TTCOIN이 제공하는 혁신적인 기능들',
        'ttcoin.whitepaper.title': '백서 다운로드',
        'ttcoin.whitepaper.desc': 'TTCOIN의 기술적 세부 사항을 확인하세요',
        'ttcoin.whitepaper.download': '백서 다운로드',
        'ttcoin.partners.title': '관계사 소개',
        'ttcoin.partners.desc': '토마토그룹 생태계와 함께하는 서비스들',
        'ttcoin.cta.join': 'TTCOIN과 함께하세요',
        'ttcoin.cta.joinDesc': '결제 혁신의 미래를 함께 만들어갑니다',
        'ttcoin.cta.start': '통통 시작하기',
        'ttcoin.cta.wallet': '지갑 다운로드',
        'ttcoin.feature.fee.title': '결제 수수료 1/10 절감',
        'ttcoin.feature.fee.desc': '기존 결제 시스템 대비 거래 수수료를 1/10로 절감',
        'ttcoin.feature.p2p.title': '빠른 P2P 거래',
        'ttcoin.feature.p2p.desc': '탈중앙화된 P2P 거래를 통한 빠른 송금 서비스',
        'ttcoin.feature.security.title': '강력한 보안',
        'ttcoin.feature.security.desc': '익명성 보장 및 높은 수준의 보안 유지',
        'ttcoin.feature.point.title': '마일리지/포인트 대체',
        'ttcoin.feature.point.desc': '시간과 장소 제한 없이 사용 가능한 마일리지/포인트 대체',
        'ttcoin.feature.speed.title': '빠른 거래 속도',
        'ttcoin.feature.speed.desc': '중앙화된 거래와 유사한 속도의 빠른 처리',
        'ttcoin.feature.media.title': '다양한 미디어 환경 지원',
        'ttcoin.feature.media.desc': '다양한 기존 미디어 환경에서 사용 가능하도록 구현',
        'ttcoin.nft.title': 'TongTong NFT',
        'ttcoin.nft.desc': '통통 NFT는 블록체인 기술을 활용하여 디지털 자산의 소유권을 명확히 하고, 안전한 거래를 지원합니다. 예술 작품, 게임 아이템 등 다양한 디지털 콘텐츠를 NFT로 발행하고 거래할 수 있는 플랫폼을 제공합니다.',
        'ttcoin.nft.secure': 'Secure',
        'ttcoin.nft.secureDesc': '블록체인 기반의 안전한 소유권 증명',
        'ttcoin.nft.trade': 'Trade',
        'ttcoin.nft.tradeDesc': 'P2P 방식의 자유로운 거래 지원',
        'ttcoin.nft.global': 'Global',
        'ttcoin.nft.globalDesc': '전 세계 어디서나 접근 가능',
        'ttcoin.partner.title': 'Our Powerful Partners',
        'ttcoin.partner.desc': '통통코인 결제 생태계를 함께 만들어가는 파트너들입니다.',
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
        'footer.wallet': 'Tomato Wallet',
        'footer.browser': 'Browser',
        'footer.community': 'Community',

        // TTCoin Page
        'ttcoin.hero.subtitle': 'Introducing the TongTongCoin Ecosystem',
        'ttcoin.hero.desc': 'A decentralized blockchain platform that dramatically reduces transaction fees and replaces mileage/points',
        'ttcoin.cta.website': 'Official Website',
        'ttcoin.features.title': 'Key Features',
        'ttcoin.features.desc': 'Innovative features provided by TTCOIN',
        'ttcoin.whitepaper.title': 'Whitepaper Download',
        'ttcoin.whitepaper.desc': 'Check the technical details of TTCOIN',
        'ttcoin.whitepaper.download': 'Download Whitepaper',
        'ttcoin.partners.title': 'Our Partners',
        'ttcoin.partners.desc': 'Services within the Tomato Group ecosystem',
        'ttcoin.cta.join': 'Join TTCOIN',
        'ttcoin.cta.joinDesc': 'Building the future of payment innovation together',
        'ttcoin.cta.start': 'Start TongTong',
        'ttcoin.cta.wallet': 'Download Wallet',
        'ttcoin.feature.fee.title': '1/10 Transaction Fee',
        'ttcoin.feature.fee.desc': 'Reduce transaction fees to 1/10 compared to existing systems',
        'ttcoin.feature.p2p.title': 'Fast P2P Transactions',
        'ttcoin.feature.p2p.desc': 'Fast remittance through decentralized P2P transactions',
        'ttcoin.feature.security.title': 'Strong Security',
        'ttcoin.feature.security.desc': 'Guaranteed anonymity and high level of security',
        'ttcoin.feature.point.title': 'Replace Points/Mileage',
        'ttcoin.feature.point.desc': 'Use without limitation on where or when',
        'ttcoin.feature.speed.title': 'Fast Transaction Speed',
        'ttcoin.feature.speed.desc': 'Similar speed to centralized transactions',
        'ttcoin.feature.media.title': 'Multi-media Support',
        'ttcoin.feature.media.desc': 'Implemented for use in various existing media environments',
        'ttcoin.nft.title': 'TongTong NFT',
        'ttcoin.nft.desc': 'TongTong NFT uses blockchain technology to verify ownership of digital assets and supports secure transactions. We provide a platform where various digital contents like artwork and game items can be minted and traded as NFTs.',
        'ttcoin.nft.secure': 'Secure',
        'ttcoin.nft.secureDesc': 'Secure proof of ownership based on blockchain',
        'ttcoin.nft.trade': 'Trade',
        'ttcoin.nft.tradeDesc': 'Support for free P2P trading',
        'ttcoin.nft.global': 'Global',
        'ttcoin.nft.globalDesc': 'Accessible from anywhere in the world',
        'ttcoin.partner.title': 'Our Powerful Partners',
        'ttcoin.partner.desc': 'Our Partners try to make tongtongcoin payment ecosystem together.',
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
        'footer.wallet': '番茄钱包',
        'footer.browser': '浏览器',
        'footer.community': '社区',

        // TTCoin Page
        'ttcoin.hero.subtitle': '介绍通通币生态系统',
        'ttcoin.hero.desc': '显着降低交易费用并取代里程/积分的去中心化区块链平台',
        'ttcoin.cta.website': '官方网站',
        'ttcoin.features.title': '主要功能',
        'ttcoin.features.desc': 'TTCOIN提供的创新功能',
        'ttcoin.whitepaper.title': '白皮书下载',
        'ttcoin.whitepaper.desc': '查看TTCOIN的技术细节',
        'ttcoin.whitepaper.download': '下载白皮书',
        'ttcoin.partners.title': '合作伙伴',
        'ttcoin.partners.desc': '番茄集团生态系统内的服务',
        'ttcoin.cta.join': '加入TTCOIN',
        'ttcoin.cta.joinDesc': '共同打造支付创新的未来',
        'ttcoin.cta.start': '开始通通',
        'ttcoin.cta.wallet': '下载钱包',
        'ttcoin.feature.fee.title': '1/10 交易费用',
        'ttcoin.feature.fee.desc': '与现有系统相比，交易费用降低至 1/10',
        'ttcoin.feature.p2p.title': '快速P2P交易',
        'ttcoin.feature.p2p.desc': '通过去中心化P2P交易实现快速汇款',
        'ttcoin.feature.security.title': '强大安全',
        'ttcoin.feature.security.desc': '保证匿名性和高水平安全性',
        'ttcoin.feature.point.title': '取代积分/里程',
        'ttcoin.feature.point.desc': '无时间地点限制使用',
        'ttcoin.feature.speed.title': '快速交易速度',
        'ttcoin.feature.speed.desc': '类似于中心化交易的处理速度',
        'ttcoin.feature.media.title': '多媒体支持',
        'ttcoin.feature.media.desc': '可在各种现有媒体环境中使用',
        'ttcoin.nft.title': '通通 NFT',
        'ttcoin.nft.desc': '通通 NFT 使用区块链技术验证数字资产的所有权并支持安全交易。我们提供一个平台，可以将艺术品和游戏道具等各种数字内容铸造并作为NFT进行交易。',
        'ttcoin.nft.secure': '安全',
        'ttcoin.nft.secureDesc': '基于区块链的安全所有权证明',
        'ttcoin.nft.trade': '交易',
        'ttcoin.nft.tradeDesc': '支持自由P2P交易',
        'ttcoin.nft.global': '全球',
        'ttcoin.nft.globalDesc': '全球任何地方均可访问',
        'ttcoin.partner.title': '我们强大的合作伙伴',
        'ttcoin.partner.desc': '我们的合作伙伴共同构建通通币支付生态系统。',
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
        'footer.wallet': 'トマトウォレット',
        'footer.browser': 'ブラウザ',
        'footer.community': 'コミュニティ',

        // TTCoin Page
        'ttcoin.hero.subtitle': 'トントンコインエコシステムの紹介',
        'ttcoin.hero.desc': '取引手数料を大幅に削減し、マイレージ/ポイントを代替する分散型ブロックチェーンプラットフォーム',
        'ttcoin.cta.website': '公式サイト',
        'ttcoin.features.title': '主な機能',
        'ttcoin.features.desc': 'TTCOINが提供する革新的な機能',
        'ttcoin.whitepaper.title': 'ホワイトペーパーダウンロード',
        'ttcoin.whitepaper.desc': 'TTCOINの技術詳細を確認してください',
        'ttcoin.whitepaper.download': 'ホワイトペーパーをダウンロード',
        'ttcoin.partners.title': 'パートナー',
        'ttcoin.partners.desc': 'トマトグループエコシステム内のサービス',
        'ttcoin.cta.join': 'TTCOINに参加する',
        'ttcoin.cta.joinDesc': '決済革新の未来を共に築きましょう',
        'ttcoin.cta.start': 'トントンを始める',
        'ttcoin.cta.wallet': 'ウォレットをダウンロード',
        'ttcoin.feature.fee.title': '取引手数料1/10',
        'ttcoin.feature.fee.desc': '既存システムと比較して取引手数料を1/10に削減',
        'ttcoin.feature.p2p.title': '高速P2P取引',
        'ttcoin.feature.p2p.desc': '分散型P2P取引による高速送金',
        'ttcoin.feature.security.title': '強力なセキュリティ',
        'ttcoin.feature.security.desc': '匿名性の保証と高レベルのセキュリティ維持',
        'ttcoin.feature.point.title': 'ポイント/マイレージ代替',
        'ttcoin.feature.point.desc': '時間や場所の制限なく使用可能',
        'ttcoin.feature.speed.title': '高速取引速度',
        'ttcoin.feature.speed.desc': '中央集権型取引と同様の処理速度',
        'ttcoin.feature.media.title': 'マルチメディア対応',
        'ttcoin.feature.media.desc': '様々な既存メディア環境で使用可能',
        'ttcoin.nft.title': 'トントン NFT',
        'ttcoin.nft.desc': 'トントンNFTはブロックチェーン技術を使用してデジタル資産の所有権を証明し、安全な取引をサポートします。アートワークやゲームアイテムなど、様々なデジタルコンテンツをNFTとして発行・取引できるプラットフォームを提供します。',
        'ttcoin.nft.secure': '安全',
        'ttcoin.nft.secureDesc': 'ブロックチェーンに基づく安全な所有権証明',
        'ttcoin.nft.trade': '取引',
        'ttcoin.nft.tradeDesc': '自由なP2P取引をサポート',
        'ttcoin.nft.global': 'グローバル',
        'ttcoin.nft.globalDesc': '世界中どこからでもアクセス可能',
        'ttcoin.partner.title': '強力なパートナー',
        'ttcoin.partner.desc': 'トントンコイン決済エコシステムを共に構築するパートナーです。',
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
        'footer.wallet': 'Ví Tomato',
        'footer.browser': 'Trình duyệt',
        'footer.community': 'Cộng đồng',

        // TTCoin Page
        'ttcoin.hero.subtitle': 'Giới thiệu Hệ sinh thái TongTongCoin',
        'ttcoin.hero.desc': 'Nền tảng blockchain phi tập trung giảm đáng kể phí giao dịch và thay thế điểm thưởng/mileage',
        'ttcoin.cta.website': 'Trang web chính thức',
        'ttcoin.features.title': 'Tính năng chính',
        'ttcoin.features.desc': 'Các tính năng đổi mới được cung cấp bởi TTCOIN',
        'ttcoin.whitepaper.title': 'Tải xuống Sách trắng',
        'ttcoin.whitepaper.desc': 'Kiểm tra chi tiết kỹ thuật của TTCOIN',
        'ttcoin.whitepaper.download': 'Tải xuống Sách trắng',
        'ttcoin.partners.title': 'Đối tác',
        'ttcoin.partners.desc': 'Các dịch vụ trong hệ sinh thái Tomato Group',
        'ttcoin.cta.join': 'Tham gia TTCOIN',
        'ttcoin.cta.joinDesc': 'Cùng xây dựng tương lai đổi mới thanh toán',
        'ttcoin.cta.start': 'Bắt đầu TongTong',
        'ttcoin.cta.wallet': 'Tải xuống Ví',
        'ttcoin.feature.fee.title': 'Phí giao dịch 1/10',
        'ttcoin.feature.fee.desc': 'Giảm phí giao dịch xuống 1/10 so với hệ thống hiện tại',
        'ttcoin.feature.p2p.title': 'Giao dịch P2P nhanh',
        'ttcoin.feature.p2p.desc': 'Chuyển tiền nhanh qua giao dịch P2P phi tập trung',
        'ttcoin.feature.security.title': 'Bảo mật mạnh mẽ',
        'ttcoin.feature.security.desc': 'Đảm bảo ẩn danh và mức độ bảo mật cao',
        'ttcoin.feature.point.title': 'Thay thế Điểm/Mileage',
        'ttcoin.feature.point.desc': 'Sử dụng không giới hạn thời gian và địa điểm',
        'ttcoin.feature.speed.title': 'Tốc độ giao dịch nhanh',
        'ttcoin.feature.speed.desc': 'Tốc độ xử lý tương đương giao dịch tập trung',
        'ttcoin.feature.media.title': 'Hỗ trợ đa phương tiện',
        'ttcoin.feature.media.desc': 'Được triển khai để sử dụng trong các môi trường truyền thông hiện có',
        'ttcoin.nft.title': 'TongTong NFT',
        'ttcoin.nft.desc': 'TongTong NFT sử dụng công nghệ blockchain để xác minh quyền sở hữu tài sản kỹ thuật số và hỗ trợ giao dịch an toàn. Chúng tôi cung cấp nền tảng nơi nội dung kỹ thuật số khác nhau như tác phẩm nghệ thuật và vật phẩm trò chơi có thể được đúc và giao dịch dưới dạng NFT.',
        'ttcoin.nft.secure': 'An toàn',
        'ttcoin.nft.secureDesc': 'Bằng chứng sở hữu an toàn dựa trên blockchain',
        'ttcoin.nft.trade': 'Giao dịch',
        'ttcoin.nft.tradeDesc': 'Hỗ trợ giao dịch P2P tự do',
        'ttcoin.nft.global': 'Toàn cầu',
        'ttcoin.nft.globalDesc': 'Truy cập từ mọi nơi trên thế giới',
        'ttcoin.partner.title': 'Đối tác mạnh mẽ',
        'ttcoin.partner.desc': 'Các đối tác của chúng tôi cùng xây dựng hệ sinh thái thanh toán tongtongcoin.',
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
