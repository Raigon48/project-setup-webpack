var path = require('path');

module.exports = {
    // this is the configuration used by webpack
    // mode is used to setup environment : development/production
    mode : "development",
    // provides the entry point for the webpack for bundling project
    entry : "./src/engine.js",
    // provides the control over the output
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : "build.js"
    }

}