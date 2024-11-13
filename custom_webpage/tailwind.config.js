/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif"
      },
      boxShadow: {
        box: "0 25px 65px rgba(0,0,0,.1)"
      },
      backgroundImage: {
        linear: "linear-gradient(145deg,#f81f01,#ee076e)"
      },
      screens:{
        "2xl": "2460px"
      }
    },
  },
  plugins: [],
}