const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImages: true,
  optimizeImagesInDev: true,
  async redirects() {
    return [
      {
        source: "/dev",
        destination: process.env.NODE_ENV === "production" ? "/" : "/dev",
        permanent: true,
      },
    ];
  },
});
