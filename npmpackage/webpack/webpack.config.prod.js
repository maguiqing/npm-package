const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.config.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    entry: path.join(__dirname, '../src/collapse'),
    output: {
        path: path.join(__dirname, '../lib/'),
        filename: 'index.js',
        libraryTarget: 'umd', // 采用通用模块定义
        libraryExport: 'default' // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            //提取css
            filename: 'main.min.css'
        })
        // new UglifyJsPlugin({
        //     sourceMap: true
        // }),
        // new BundleAnalyzerPlugin({ analyzerPort: 8090 }),
    ]
});
