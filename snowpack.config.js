// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
    data: { url: "/data", static: true },
  },
  plugins: [
    "@snowpack/plugin-babel",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-react-refresh",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 3000,
    open: "none",
  },
  buildOptions: {
    /* ... */
  },
  // Map all routes to index.html since we use client side routes
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
};
