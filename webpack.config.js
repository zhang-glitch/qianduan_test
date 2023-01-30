const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // entry: './src/main.js',
  // 这个多入口如果想要分割代码，它本身不能是懒加载的，要不然不能分割多次使用的文件。
  entry: {
    main: './src/main.js',
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'js/[name]_[fullhash:10].js',
    // chunkFilename: 'js/[name]_[fullhash:10].js',
    filename: 'js/[name]_[chunkhash:10].js',
    chunkFilename: 'js/[name]_[chunkhash:10].js',
    // filename: 'js/[name]_[contenthash:10].js',
    // chunkFilename: 'js/[name]_[contenthash:10].js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: 'css/a_[contenthash:10].css'
    })
  ],
  optimization: {
    chunkIds: 'named',
    // 代码分割配置
    splitChunks: {
      chunks: 'all', // 对所有模块都进行分割
      // 修改配置
      cacheGroups: {
        // 组，哪些模块要打包到一个组
        // defaultVendors: { // 组名
        //   test: /[\\/]node_modules[\\/]/, // 需要打包到一起的模块
        //   priority: -10, // 权重（越大越高）
        //   reuseExistingChunk: true, // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块
        // },
        default: {
          // 其他没有写的配置会使用上面的默认值
          minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
