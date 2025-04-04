const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Entry point
  mode: "development",
  entry: "./index.js",

  // Output settings
  output: {
    filename: "bundle.js", // Output JS file name
    path: path.resolve(__dirname, "dist"), // Output folder
    assetModuleFilename: "assets/[hash][ext][query]", // For images, fonts, etc.
  },

  // Loaders to handle different file types
  module: {
    rules: [
      {
        // JavaScript files (using Babel)
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        // CSS files (using style-loader and css-loader)
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Image files (using asset modules in Webpack 5)
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // Use Webpack's asset module for images
      },
    ],
  },

  // Plugins to handle HTML and other assets
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to your HTML template
      filename: "index.html", // Output HTML file in dist/
    }),
  ],
};
