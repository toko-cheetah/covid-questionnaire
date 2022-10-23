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
        "anonymous-pro-bold": ["Anonymous Pro Bold", "sans-serif"],
        "bpg-nino-mtavruli-normal": ["BPG Nino Mtavruli Normal", "sans-serif"],
        "bpg-nino-mtavruli-bold": ["BPG Nino Mtavruli Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
