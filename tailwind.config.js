/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary : '#0284c7',
        secondary: '#475569',
        dark1 : '#374151',
        dark2 : '#1f2937',
        bluelight: '#38bdf8',
      },
      screens: {
        '2xl' : '1000px'
      }
    },
  },
  plugins: [],
}

