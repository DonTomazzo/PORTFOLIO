/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'menu-slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '80%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'menu-slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slideIn': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'fadeOut': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'text-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'menu-in': 'menu-slide-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'menu-out': 'menu-slide-out 0.5s ease-in-out forwards',
        'toast-slide-in': 'slideIn 0.5s ease-out forwards',
        'toast-fade-out': 'fadeOut 0.5s ease-in 2.5s forwards',
        'text-blink': 'text-blink 2s linear infinite',
      },
      fontFamily: {
        handwritten: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};