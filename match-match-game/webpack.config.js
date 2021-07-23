const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    gamePage: "./src/scripts/gamePage.js",
    gameFunc: "./src/scripts/gameFunc.js",
    gameSettings: "./src/scripts/gameSettings.js",
    images: "./src/scripts/getImages.js",
    aboutGame: "./src/scripts/aboutGame.js"
  },
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "settings.html",
      chunks: ["gameSettings"],
      template: "src/settings.html",
    }),
    new HtmlWebpackPlugin({
      filename: "gamePage.html",
      chunks: ["gamePage", "gameFunc", "images"],
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["images", "aboutGame"],
      template: "src/about_game.html",
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
      }
    ],
  },
  stats: {
    children: true,
  },
  resolve: {
    modules: [path.join(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".css"],
  },
};
