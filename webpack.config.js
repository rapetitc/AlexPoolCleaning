const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

//Configurations:
const isInDevMode = true;

//Rules for Loaders
const rulesForJSX = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};
const rulesForFiles = {
  test: /\.(png|jpe?g|svg|mp4)$/,
  type: "asset/resource",
};
const rulesForSASS = {
  test: /\.scss$/,
  use: ["style-loader", "css-loader", "sass-loader"],
};

module.exports = {
  mode: isInDevMode ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build"),
  },
  module: {
    rules: [rulesForJSX, rulesForSASS, rulesForFiles],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      favicon: "./public/favicon.ico",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [path.resolve(__dirname, "/src"), "node_modules"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/src"),
    },
    compress: true,
    port: 9900,
  },
};
