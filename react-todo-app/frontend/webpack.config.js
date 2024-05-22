const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    filename: "./app.js",
  },
  devServer: {
    port: 8080,
    contentBase: "./public",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      modules: __dirname + "/node_modules",
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        use: [MiniCssExtractPlugin.loader, "babel-loader"],
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"],
        },
      },
    ],
  },
};
