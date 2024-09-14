const path = require("path");
const process = require("process");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
 entry: {
    index: "./src/js/index.tsx",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "..", "build")
  },
  resolve: {
    alias: {
      "~": [path.resolve(__dirname, "..", "src", "js")],
      "react": "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
    modules: [path.resolve(__dirname, "..", "node_modules")],
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          loader: "tsx",
          target: "ES5"
        }
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/html/", to: "html" },
        { from: "src/css/", to: "css" },
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/images", to: "images/" },
        { from: "src/_locales", to: "_locales/" },
        { from: "src/fonts", to: "fonts/" }
      ],
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      React: ["preact/compat"]
    }),
  ],
}
