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
    defaultapp1: ["./src/index.jsx"]
  },
  // target: 'node',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "[name].js",
    publicPath: '/'
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
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [
              {
                  loader: 'file-loader',
                  options: {
                      name: '[path][name].[ext]'
                  },
              },
          ]
        }
    ]
  },
  resolve: {
      extensions: ['.js', '.json', '.jsx']
  }
};