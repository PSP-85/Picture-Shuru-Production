const purgecss = require('@fullhuman/postcss-purgecss').default; // FIXED IMPORT

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./**/*.html', './src/**/*.{js,jsx,ts,tsx}'], // Scan used classes
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [], // Extract Bootstrap classes
    }),
  ],
};