const path = require("path");
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

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
          "babel-loader",
          {
            loader: "@svgr/webpack",
            options: {
              babel: false,
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],

    alias: {
      Src: path.resolve(__dirname, "./src"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "React",
      template: "./src/index.html",
    }),

    // eslint checking
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
  ],
};
