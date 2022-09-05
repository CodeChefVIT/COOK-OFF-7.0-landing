/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bgLanding.png')",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-19rem*5))" },
        },
        scrollNX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(19rem*5))" },
        },
      },
      animation: {
        scroll: "scrollX 40s linear infinite",
        scrollN: "scrollNX 40s linear infinite",
      },
    },
  },
  plugins: [],
};
