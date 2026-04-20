/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Orange/gold — matches logo gradient
        brand: {
          50:  '#fff8ec',
          100: '#ffeecd',
          200: '#ffda94',
          300: '#ffc35c',
          400: '#fbab2b',
          500: '#f59411',
          600: '#e5780a',
          700: '#bd580c',
          800: '#964512',
          900: '#793a12',
        },
        ink: {
          50:  '#f6f6f7',
          100: '#e1e1e4',
          200: '#c3c4ca',
          300: '#9b9da7',
          400: '#6d6f7b',
          500: '#4d4f5a',
          600: '#3a3c46',
          700: '#2b2c34',
          800: '#1a1b20',
          900: '#0f1014',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
