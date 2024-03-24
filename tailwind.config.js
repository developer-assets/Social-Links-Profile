/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.html'],
  theme: {
    extend: {
      colors: {
        mentor: {
          DEFAULT: '#141414',
          'dgray': '#1F1F1F',
          'gray': '#333333',
          'green': '#C5F82A'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
