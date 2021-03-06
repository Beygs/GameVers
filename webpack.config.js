const DotenvWebpackPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  console.log("NODE_ENV:", env.NODE_ENV);

  return {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "",
    },
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /(node_modules)/,
          use: {
            loader: "ts-loader"
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                url: false
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: "file-loader",
          options: {
            outputPath: "img/",
            name: "[name].[ext]"
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource"
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css",
      }),
      new DotenvWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "/index.html"
      }),
    ],
  };
};