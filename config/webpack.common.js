const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

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
      "@images": path.resolve(__dirname, "../src/images"),
      "@pages": path.resolve(__dirname, "../src/pages"),
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
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./public/manifest.json", to: "./" },
        { from: "./public/robots.txt", to: "./" },
        { from: "./public/icons", to: "./icons" },
      ],
    }),
  ],
}
