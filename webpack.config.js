const path = require("path");

const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV != "production";

const config = (webpack.Configuration = {
  mode: "development",
  entry: path.join(path.resolve(__dirname, "frontend"), "app.js"),
  output: {
    path: path.join(__dirname, "backend/src/public"),
    filename: "js/bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, "frontend"), "index.html"),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.css",
    }),
  ],
  devtool: "source-map",
});

module.exports = config;
