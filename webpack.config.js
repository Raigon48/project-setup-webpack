var path = require('path') ;
var webpack = require('webpack') ;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
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
    mode : "development",
    // provides the entry point for the webpack for bundling project
    entry : './src/engine.js',
    // provides the control over the output
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : "js/main.[hash].js",
        publicPath : '/assets/'
    },
    devServer : {
        port : 3000,
        contentBase : path.join(__dirname, "dist"),
        writeToDisk : false,
        hot : true
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            title : 'Hello World!',
            template : './dist/template.html',
            filename : '../dist/index.html',
            minify : {
                collapseWhitespace : false,
                removeComments : false
            },
            alwaysWriteToDisk : true
        }),
        new HTMLWebpackHarddiskPlugin()
    ]

}