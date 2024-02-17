const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warning: '#FF3C3C',
        primary: {
          500: '#48E59B'
        }
      }
    },
  },
  plugins: [],
}

