/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // macOS System Colors (Dark Mode inspired)
                'macos-bg': '#1e1e1e', // Dark background
                'macos-sidebar': 'rgba(40, 40, 40, 0.7)', // Translucent sidebar
                'macos-active': '#3478f6', // System Blue
                'macos-text': '#ffffff',
                'macos-text-secondary': '#a1a1a6',
                'macos-border': '#3d3d3d',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
