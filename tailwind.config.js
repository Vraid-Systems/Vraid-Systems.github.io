/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html', './_layouts/**/*.html', './_includes/**/*.html'],
    theme: {
        extend: {
            colors: {
                paper: '#FAFAFA',
                obsidian: '#121212',
                'steel-blue': '#465262',
                'mint-glass': '#E8F5F2',
                'ghost-gray': '#E0E0E0',
            },
            fontFamily: {
                sans: ['Public Sans', 'sans-serif'],
                heading: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
            spacing: {
                '128': '32rem',
            },
        },
    },
};
