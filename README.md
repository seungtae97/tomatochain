# Tomato Chain Official Website

This is the official repository for the **Tomato Chain** website. It is a modern, responsive single-page application built with React and TypeScript, featuring 3D animations and multi-language support.

## 🛠 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (Downgraded for stability and security)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Internationalization (i18n)**: [Custom Context API](src/i18n/LanguageContext.tsx)
- **Security**: React 18 LTS for production stability and avoiding recent RCE vulnerabilities in early React 19 versions.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository (or extract the project folder).
2. Install dependencies:

```bash
npm install
```

### Development

To start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📦 Build & Deployment

To build the project for production:

```bash
npm run build
```

The build artifacts will be output to the `dist` directory. You can preview the production build locally:

```bash
npm run preview
```

### Deployment

This project is optimized for deployment on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).

- **Vercel**: Simply connect your GitHub repository or use the Vercel CLI.
- **Static Hosting**: Upload the contents of the `dist` folder to any static hosting service.

## 📂 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
│   ├── home/        # Components specific to the Home page
│   ├── layout/      # Layout components (Navbar, Footer, etc.)
│   └── ui/          # Generic UI components (buttons, cards, etc.)
├── i18n/            # Internationalization configuration
├── pages/           # Page components (HomePage, TTCoinPage)
├── App.tsx          # Main application component with routes
└── main.tsx         # Application entry point
```

## ✨ Key Features

- **3D Hero Section**: Interactive particle animation using custom implementation.
- **Performance Section**: Animated statistics and charts.
- **Partner & Ecology**: Grid layouts showcasing partners and ecosystem apps.
- **Multi-language**: Support for Korean, English, Chinese, Japanese, and Vietnamese.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 📝 License

This project is private and proprietary to Tomato Chain.
