/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const { GenerateSW } = require("workbox-webpack-plugin")

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new GenerateSW({
      maximumFileSizeToCacheInBytes: 7_000_000,
      navigateFallback: "/index.html",
    }),
  ],
})
