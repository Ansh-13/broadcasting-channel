/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
      'black': '#080710',
      'white': '#F8F8FF'
      },
      fontFamily:{
        'quicksand': ["Quicksand"],
        'font1': ['Libre','Baskerville','Roboto', 'Quicksand', ]
      },
    },
  },
  plugins: [],
}

