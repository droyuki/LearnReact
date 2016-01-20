/**
 * Created by WeiChen on 2016/1/17.
 */
var path = require('path');
include: path.join(__dirname, 'app')
var webpack = require('webpack');
var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'app/Form/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'app'),
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style!css' // Run both loaders
        }]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;