import path from 'path';


export default {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
      },
    ],
  },
  devServer: {
    inline: true,
    port: 3333,
    historyApiFallback: true,
  },
};
