var path = require('path') ;
var webpack = require('webpack') ;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');
/*
[hash]
[chunkhash]
[name]
[id]
[query]
[contenthash]
*/

module.exports = {
    // this is the configuration used by webpack
    // mode is used to setup environment : development/production
    mode : "production",
    // provides the entry point for the webpack for bundling project
    entry : './src/engine.tsx',
    // provides the control over the output
    resolve : {
        extensions : ['.ts', '.tsx', '.scss', '.css', '.js', '.jsx']
    },
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : "js/main.[contenthash].js",
        publicPath : '/assets/'
    },
    module : {
        rules : [
            {
                test : /\.tsx?$/ ,
                exclude : /node_modules/,
                loader : 'awesome-typescript-loader'
            },
            {
                test : /\.jsx?$/ ,
                exclude : /node_modules/ ,
                use : ['babel-loader']
            },
            {
                test : /\.scss$/ ,
                exclude : /node_modules/,
                use : [miniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test : /\.css$/, //we know its a css file
                include : /node_modules/,
                use : [miniCSSExtractPlugin.loader, 'css-loader'] // css-loader -> style-loader
            }
        ]
    },
    plugins : [
        new HTMLWebpackPlugin({
            title : 'Hello World!',
            template : './dist/template.html',
            minify : {
                collapseWhitespace : false,
                removeComments : false
            }
        }),
        new miniCSSExtractPlugin(
            {
                filename : 'css/[name].css'
            }
        )
    ]

}