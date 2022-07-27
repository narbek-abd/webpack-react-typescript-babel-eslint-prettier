const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  return {
    mode: 'development',                              // only for dev
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: '[name].[contenthash].js',
      clean: true,
    },
  
    devtool: 'eval-cheap-module-source-map',                    // only for dev
    devServer: {                                     // only for dev
      static: './public',
    },
  
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   include: path.resolve(__dirname, 'src'),
        //   loader: 'babel-loader',
        // },

        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
      }),
    ],
  
  }
 
};
