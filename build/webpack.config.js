plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dist/vendor-manifest.json')
    })
  ]