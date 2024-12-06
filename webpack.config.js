const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),  // Use path.resolve to define the output directory
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      port: 3001,
      historyApiFallback: true, // This ensures React Router works properly
    },
  };
