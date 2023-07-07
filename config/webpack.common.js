/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")
const { GenerateSW } = require("workbox-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        oneOf: [
          {
            test: /\.module\.scss$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: "[local]__[hash:base64:5]",
                    exportLocalsConvention: "camelCaseOnly",
                  },
                },
              },
              { loader: "sass-loader" },
            ],
          },
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
      {
        test: /\.manifest.json$/,
        loader: "file-loader",
        type: "javascript/auto",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    alias: {
      "@components": path.resolve(__dirname, "../src/components"),
    },
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      // favicon: "./public/icons/favicon.ico",
      // manifest: "./public/manifest.json",
    }),
    // new WorkboxPlugin.GenerateSW({
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./" },
        { from: "./public/icons", to: "./icons" },
      ],
    }),
    new GenerateSW({
      maximumFileSizeToCacheInBytes: 50_000_000,
    }),
  ],
}
