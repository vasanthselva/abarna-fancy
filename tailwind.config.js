/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:"#000000",
         white:"#ffffff",
        ivory: "#bb6060",
        navy: "#ffffff",
        navyDeep: "#e9edf3",
        brass: "#000000",
        brassLight: "#030303",
        ink: "#1B1B1B",
        clay: "#ca2819",
        mist: "#000000",
        blue: "#00a008",
        search:"#e7e4e4",
        orange:"#ff5202",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 10px rgba(16, 36, 62, 0.08)",
        cardHover: "0 8px 24px rgba(16, 36, 62, 0.16)",
      },
    },
  },
  plugins: [],
};
