import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Wedding palette — warm blush & gold
        blush: {
          50: '#fdf2f5',
          100: '#fce7ed',
          200: '#f9d0de',
          300: '#f4a8c0',
          400: '#ec739b',
          500: '#e04878',
          600: '#cc2b5e',
          700: '#ac1d4c',
          800: '#901b45',
          900: '#7b1b3e',
        },
        champagne: {
          50: '#fefcf5',
          100: '#fdf7e5',
          200: '#faedcc',
          300: '#f5dc9e',
          400: '#efc76b',
          500: '#e8b144',
          600: '#d4942a',
          700: '#b07420',
          800: '#8e5c20',
          900: '#754d1e',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        ivory: '#fefaf6',
        mauve: '#c9a0b0',
        sage: '#b2c4b2',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'petal-fall': 'petalFall 8s ease-in infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-20px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'floral-pattern': "url('/images/pattern.svg')",
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(204, 43, 94, 0.08)',
        'glow': '0 0 40px rgba(232, 177, 68, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
