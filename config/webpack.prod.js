const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const { GenerateSW } = require("workbox-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new GenerateSW({
      maximumFileSizeToCacheInBytes: 7_000_000,
      navigateFallback: "/index.html",
      skipWaiting: true,
    }),
  ],
})
