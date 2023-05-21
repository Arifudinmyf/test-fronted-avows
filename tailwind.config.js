/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins-bold': ["poppins-bold", "Arial", "sans-serif"],
      'poppins-ExtraLight': ["poppins-ExtraLight", "Arial", "sans-serif"],
      'poppins-regular': ["poppins-regular", "Arial", "sans-serif"],
      'arifudin-bold': ["arifudin-bold", "Arial", "sans-serif"],
      'arifudin-regular': ["arifudin-regular", "Arial", "sans-serif"]
    }
  },
  plugins: [],
}

