/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#1A1C35",
        "secondary":"#f97316",
        "ascent":"#585D73",
        "error":"#D92525",
        "success":"#A3CCAB"
      }
    },
  },
  plugins: [],
}
