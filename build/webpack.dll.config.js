const path    = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
      vendor: ['vue/dist/vue.esm.js', 'vuex', 'axios', 'vue-router','vue-weui']
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve('./dist', '[name]-manifest.json'),
      name: '[name]_library'
    }),
    // 压缩打包的文件
    new webpack.optimize.UglifyJsPlugin({ 
        compress: {
          warnings: false
        }
      })
  ]
};