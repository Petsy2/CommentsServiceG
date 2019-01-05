module.exports = {
  entry: __dirname + '/client/Reviews.jsx',
  output: {
    path: __dirname + '/public/',
    filename: 'reviews.bundle.js'
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  watch: true,
  mode: 'development'
};