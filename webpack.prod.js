const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: 'static/[hash][ext][query]',
    clean: true,
  },

  devtool: false,

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].chunk.css",
    }),
  ],
});
