module.exports = {
  entry: __dirname + '/client/App.jsx',
  output: {
    path: __dirname + '/public/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  watch: true,
  mode: 'development'
};