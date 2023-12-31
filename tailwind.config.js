/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      darkRed: '#1b0000',
      red: '#ff0000',
      white: '#ffffff',
      gray: '#cccccc',
      yellow: '#FFFF00',
      blue: '#0000ff'
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
}

