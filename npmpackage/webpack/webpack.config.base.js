const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            // 用于生成的HTML文档的标题
            title: 'Webpack 生产环境配置',
            // webpack 生成模板的路径
            template: './index.html'
        }),
        // 用法：new CleanWebpackPlugin(paths [, {options}])
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.svg/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
