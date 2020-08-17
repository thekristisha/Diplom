const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
  entry: {
      main: './src/js/index.js',
      about: './src/js/about/index.js',
      analytics: './src/js/analytics/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: "babel-loader" },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader', 'postcss-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      },
      {
        test: /\.(svg|png|jpg|gif|ico)$/i,
        use: ['file-loader?name=./images/[name].[ext]&esModule=false',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                quality: 65,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ]
      }
    ]
  },


  plugins: [
    new MiniCssExtractPlugin({
      filename: './style/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
    inject: false,
      template: './src/index.html',
      filename:'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      inject: false,
        template: './src/about.html',
        filename:'about.html',
        chunks: ['about']
      }),
      new HtmlWebpackPlugin({
        inject: false,
          template: './src/analytics.html',
          filename:'analytics.html',
          chunks: ['analytics']
        }),
    new WebpackMd5Hash(),
  ]
};