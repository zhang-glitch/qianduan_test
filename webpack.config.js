const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const TestPlugin = require('./plugins/test-plugin.js')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // 测试loader
          // "./loaders/loader02-async.js",
          // "./loaders/loader01.js",
          // "./loaders/loader03-raw.js"
          // "./loaders/loader04-pitching.js",
          // "./loaders/loader05-pitching.js",
          // "./loaders/loader06-pitching.js",

          // 功能loader
          // "./loaders/demo2/clean-console-loader.js"

          // {
          //   loader:  "./loaders/banner-loader/index.js",
          //   options: {
          //     // author: "zh",
          //     // author: true,
          //     // time: "2022-6-9"
          //   }
          // }

          {
            loader: './loaders/babel-loader/index.js',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['./loaders/style-loader/index.js', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: './loaders/file-loader/index.js',
        type: 'javascript/auto' // 阻止webpack默认处理图片资源，只使用file-loader处理
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),

    new TestPlugin()
  ],
  mode: 'development'
}
