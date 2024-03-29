const { merge } = require("webpack-merge")
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    https: true,
  },
})
