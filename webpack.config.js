const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const mode = isProduction ? "production" : "development";

const src = path.resolve(__dirname, "src");

module.exports = {
  devtool: isProduction ? false : "eval-source-map",
  entry: {
    app: path.join(src, "index.tsx"),
  },
  mode,
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        loader: "ts-loader",
        test: /\.tsx?$/,
      },
      {
        test: /\.(png|eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: path.resolve(src, "index.html"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    fallback: {
      buffer: require.resolve("buffer/"),
    },
    modules: [src, "node_modules"],
  },
};
