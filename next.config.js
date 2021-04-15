const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImages: true,
  optimizeImagesInDev: true,
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
});
