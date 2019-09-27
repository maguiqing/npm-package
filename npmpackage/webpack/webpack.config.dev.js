const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge'); //这里引入merge
const common = require('./webpack.config.base.js'); //这里引入公共代码

module.exports = merge(common, {
    //注意这里的写法
    mode: 'development',
    entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
    output: {
        path: path.resolve(__dirname, '../dist'), // 项目的打包文件路径
        // publicPath: '/dist/', // 通过devServer访问路径
        filename: 'build.js' // 打包后的文件名
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '../src/main.js'),
        compress: true, //开启gzip压缩
        port: 8000,
        open: true,
        hot: true,
        overlay: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});
