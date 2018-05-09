const paths = {
  appEntry: __dirname + '/src/scripts/app.js',
  appOutput: __dirname + '/src/.tmp/scripts/'
}

module.exports = {
  mode: 'none',
  entry: {
    app: paths.appEntry,
  },
  output: {
    path: paths.appOutput,
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}