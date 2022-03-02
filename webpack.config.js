const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlconfig = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  inject: "body"
});

module.exports = {
  mode: "development",
  entry: {
    script: path.resolve(__dirname, "src", "script.ts"),
  },
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [htmlconfig],
};
