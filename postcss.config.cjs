// postcss.config.cjs
const tailwindPostcss = require("@tailwindcss/postcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: {
    tailwindcss: tailwindPostcss(),
    autoprefixer: autoprefixer(),
  },
};
