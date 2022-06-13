const defaultTheme = require("tailwindcss/defaultTheme");

// @ts-check
/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/components/**/*.{jsx,tsx}",
    "./src/features/**/*.{jsx,tsx}",
    "./src/pages/**/*.{jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};

module.exports = tailwindConfig;
