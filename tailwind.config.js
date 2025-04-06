/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Red Hat Display", "serif"],
        orbitron: ["Orbitron", "sans-serif"], 
        bebas: ["Bebas Neue", "cursive"],
        teko: ["Teko", "sans-serif"],
        ptsans: ["PT Sans Narrow", "sans-serif"],
      },
    },
  },
  plugins: [],
}
