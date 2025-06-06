/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1E2A78',
          50: '#E6E8F4',
          100: '#C2C7E5',
          200: '#9AA3D7',
          300: '#717FC8',
          400: '#495BB9',
          500: '#1E2A78',
          600: '#1B2369',
          700: '#171D5A',
          800: '#13184B',
          900: '#0F133C',
        },
        accent: {
          DEFAULT: '#3B82F6',
          50: '#EBF2FE',
          100: '#D7E6FD',
          200: '#B0CDFB',
          300: '#88B4F9',
          400: '#619BF7',
          500: '#3B82F6',
          600: '#0B61EE',
          700: '#084BB8',
          800: '#063583',
          900: '#041F4D',
        }
      },
      animation: {
        'loading-bar': 'loading 2s ease-in-out infinite',
      },
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
};