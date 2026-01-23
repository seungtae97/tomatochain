
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode via class strategy
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#a82127',
                    hover: '#8a1b1f', // Slightly darker for hover
                    light: '#c0353b', // Lighter for accents
                },
                dark: {
                    bg: '#1a1a1a',
                    surface: '#2a2a2a',
                    text: '#ffffff',
                    muted: '#a0a0a0',
                }
            },
            fontFamily: {
                sans: ['Inter', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
