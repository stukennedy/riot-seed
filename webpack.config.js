var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './app/index',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    devtool: 'eval',
    debug: true,
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, loader: 'riotjs-loader', query: { type: 'babel' } }
    ],
    loaders: [
      { test: /\.js|\.tag$/, exclude: /node_modules/, include: /app/, loader: 'babel', query: {presets: ['es2015', 'stage-3']} },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.sass|\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.json$/, exclude: /node_modules/, loader: 'json-loader' },
      { test: /\.jpe?g$|\.gif$|\.png$|\.ico|\.svg$|\.woff$|\.woff2$|\.eot$|\.otf$|\.ttf$|\.mp3$|\.wav$/, loader: 'file-loader' }
    ]
  },
  devServer: {
    contentBase: './public',
    port: 8080,
    hot: true,
    inline: true
  }
}
