/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orange': "rgb(255 174 0 / <alpha-value>)",
        'green': "rgb(55 179 74 / <alpha-value>)",
        'black': "rgb(26 25 25 / <alpha-value>)",
        'grey': "rgb(69 66 65 / <alpha-value>)",
        'white': 'rgb(255 255 255 / <alpha-value>)',
      }
    },
  },
  plugins: [],
}
