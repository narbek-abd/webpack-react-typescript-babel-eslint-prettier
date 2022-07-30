const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),

    // eslint checking
    // new ESLintPlugin({
    //   extensions: ["js", "jsx", "ts", "tsx"],
    // }),
  ],
};
