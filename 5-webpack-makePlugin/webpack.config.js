const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { RemoveCommentsPlugin } = require("./remove-common-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [new CleanWebpackPlugin(), new RemoveCommentsPlugin()],
};
