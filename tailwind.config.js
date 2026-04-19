/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eef5ff',
          100: '#d9eaff',
          200: '#bcd8ff',
          300: '#8dbeff',
          400: '#599bfc',
          500: '#3b77f8',
          600: '#2257ed',
          700: '#1a43d9',
          800: '#1c38b0',
          900: '#1c348b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
