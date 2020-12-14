const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const  ip = require('ip');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: ip.address(),
    hot: true
  }
});
