/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary : '#0284c7',
        secondary: '#475569',
      },
      screens: {
        '2xl' : '1000px'
      }
    },
  },
  plugins: [],
}

