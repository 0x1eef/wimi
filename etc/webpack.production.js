const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(
  common,
  {
    mode: "production",
    devtool: false,
    optimization: { minimize: true },
    output: {path: path.resolve(__dirname, "build", "production")}
  }
)
