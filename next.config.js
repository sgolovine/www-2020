const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImages: true,
  optimizeImagesInDev: true,
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
});
