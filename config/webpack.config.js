const path = require('path')
const argv = require('yargs').argv
module.exports = {
  mode: argv.env === 'production' ? 'production' : 'development',
  entry: {
    app: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')]
  },
  output:{
    filename: 'cache.js',
    path: path.resolve(__dirname, '../dist/'),
    libraryTarget: 'umd',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: ['babel-loader']
      },

    ]
  },
  plugins:[

  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    // compress: true,
    port: 9001,
    index: 'index.html'
  },
  resolve: {
    extensions: [ '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '..'),
    }
  }
}
