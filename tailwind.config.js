/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '0xl': '4px 7px 0px black',
        'shadow-r-sm' : '20px 3px 15px red'
      },
      transitionProperty:{
        "w" : 'width'
      }
    },
  },
  plugins: [],
}
