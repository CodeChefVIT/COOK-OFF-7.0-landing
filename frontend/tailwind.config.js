/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
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
      fontFamily: {
        mudclaw: "Mudclaw",
        ibm: "IBM Plex Mono",
      },
    },
  },
  plugins: [],
};
