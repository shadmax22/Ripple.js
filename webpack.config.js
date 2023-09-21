const path = require("path");

module.exports = {
  mode: "development", // Set the mode to 'development' or 'production'

  entry: "./test/index.jsx", // Update with the entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    static: "./dist", // Serve files from the dist directory
    hot: true, // Enable Hot Module Replacement (HMR)
  },
};
