const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sass = require("sass");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    requests: "./src/scripts/requests.js",
    garageRender: "./src/scripts/garageRender.js",
    settings: "./src/scripts/settingsRender.js",
    moveCarFunc: "./src/scripts/moveCarFunc.js",
    settingsFunc: "./src/scripts/settingsFunc.js"
  },
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "winners.html",
      chunks: ["requests"],
      template: "src/html_template.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["garageRender", "settings", "moveCarFunc", "settingsFunc"],
      template: "src/html_template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: '[name].[ext]',
          outputPath: "images",
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  stats: {
    children: true,
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".css"],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};
