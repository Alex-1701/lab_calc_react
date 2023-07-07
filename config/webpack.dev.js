/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require("webpack-merge")
const path = require("path")
const common = require("./webpack.common")

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    // static:  {
    //   directory: path.join(__dirname, '../dist/client'),
    // },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    https: true,
  },
})
