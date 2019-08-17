const merge=require('webpack-merge');
const webpack=require('webpack');
const common=require('./webpack.config.base.js');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports=merge(common,{
    mode:'production',
    module:{
        rules:[

        ]
    },
    plugins:[
        new MiniCssExtractPlugin({//提取css
            filename:'../css/main.css'
        }),
        // new UglifyJsPlugin({
        //     sourceMap: true
        // }),
        // new BundleAnalyzerPlugin({ analyzerPort: 8090 }),

    ]
})
