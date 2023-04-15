/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'dancing-script': ['Dancing Script', 'cursive'],
                tilt: ['Tilt Prism', 'cursive'],
                dongle: ['Dongle', 'sans-serif'],
            },
            colors: {
                bluse: {
                    50: '#f0f8ff',
                    100: '#dff0ff',
                    200: '#b9e2fe',
                    300: '#7bccfe',
                    400: '#34b2fc',
                    500: '#0a99ed',
                    600: '#0078cb',
                    700: '#0060a4',
                    800: '#055287',
                    900: '#0a4570',
                    950: '#083358',
                },
                'coral-red': {
                    50: '#fff1f1',
                    100: '#ffe0e0',
                    200: '#ffc6c6',
                    300: '#ff9e9e',
                    400: '#ff6767',
                    500: '#fc3c3c',
                    600: '#ea1818',
                    700: '#c51010',
                    800: '#a31111',
                    900: '#861616',
                    950: '#490606',
                },
            },
        },
    },
    plugins: [],
};
