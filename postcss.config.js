var tailwindcss = require("tailwindcss");
var autoprefixer = require("autoprefixer");


module.exports = {
  plugins: [
    tailwindcss("./src/tailwind.config.js"),
    autoprefixer,
  ],
};
