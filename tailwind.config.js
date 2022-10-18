/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "tbc-contractica-caps-bold": [
          "TBC Contractica CAPS Bold",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
