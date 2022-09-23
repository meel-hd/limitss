/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '0xl': '7px 10px 0px rgba(0, 0, 0,1)',
      }
    },
  },
  plugins: [],
}
