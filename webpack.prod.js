const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require("terser-webpack-plugin"); // 压缩代码
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});