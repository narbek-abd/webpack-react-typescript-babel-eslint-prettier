const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   include: path.resolve(__dirname, 'src'),
      //   loader: 'babel-loader',
      // },

      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
};
