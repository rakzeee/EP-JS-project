const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  mode: "development",
  entry: {
    defaultapp1: ["./src/index.js"]
  },
  // target: 'node',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "[name].js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: outputDirectory
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      title: "EP-JS-Project",
      hash: true,
      template: "stub/index.html"
    })
  ],
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
  },
  resolve: {
      extensions: ['.js', '.json', '.jsx']
  }
};