var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval',
  entry: ['./src/index', './Style/BootstrapOverride.scss', './Style/App/App.scss'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename:  "../Style/style.css",
      allChunks: true,
      disable: process.env.NODE_ENV !== 'production'})
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      loader: "babel-loader",
      include: path.join(__dirname, 'src')
    }, {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          include: path.join(__dirname, 'src')
    },{
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
    }, {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!less-loader"})
    }, {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
    }, {
          test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
          loader: "url-loader?mimetype=application/font-woff"
    }, {
          test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
          loader: "file-loader?name=[name].[ext]"
    }]
  }
};
