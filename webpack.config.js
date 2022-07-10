//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {

  return {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    devServer: {
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        { 
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"] 
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/src/index.html'),
      }),
      new Dotenv({
        path: `./.env.${env.production ? "production" : "dev"}`,
        systemvars: env.production,
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }
}