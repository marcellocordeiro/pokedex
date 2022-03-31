const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{jsx,tsx}",
    "./src/features/**/*.{jsx,tsx}",
    "./src/pages/**/*.{jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
