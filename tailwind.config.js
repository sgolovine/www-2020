module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        instagram: "#E4405F",
        linkedin: "#0077B5",
        github: "#181717",
        "brand-yellow": "#ffd23f",
        "brand-white": "#f7fff7",
        "brand-link": "#adb5bd",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
