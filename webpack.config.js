var path = require('path');

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
        filename : "js/main.js",
        publicPath : '/assets/'
    },
    devServer : {
        port : 3000,
        contentBase : path.join(__dirname, "dist"),
        writeToDisk : false
    }

}