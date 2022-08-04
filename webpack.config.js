// !https://www.youtube.com/watch?v=DW28sSQxBO8&t=204s
// * npm run build
// * npx webpack serve

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    filename: path.resolve(__dirname, 'src/index.js'), //* указываем откуда барть файлы для сборки
  },

  output: {
    path: path.resolve(__dirname, 'dist'), //* указывем папку для сборки проекта
    filename: '[name][contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },

  performance: {
    hints: false,
    maxAssetSize: 51200,
    maxEntrypointSize: 51200,
  },
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'My Web Page',
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
  devtool: 'source-map',
};
