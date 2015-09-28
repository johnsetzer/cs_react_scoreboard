module.exports = {
  entry: './src/index.jsx',
  
  output: {
    filename: 'build/bundle.js',
    publicPath: 'http://localhost:8080/'
  },

  module: {
    loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components|babel_build)/,
          loader: 'babel?optional[]=runtime'
        }
    ]
  },

  externals: {
    'react': 'React'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};