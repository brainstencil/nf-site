/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        backgroundImage: {
          'hero': "url('/src/assets/images/3-A@2x.png')",
        },
        fontFamily: {
          'onest': ['Onest', 'sans-serif'],
        },
        fontWeight: {
          'light': 300,
          'regular': 400,
          'block': 900,
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-in',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  };