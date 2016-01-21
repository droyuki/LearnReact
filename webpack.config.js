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
        path.resolve(__dirname, 'app/View/index.js')
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
        },{
            test: /\.(jpe?g|png|gif|svg|ttf|woff|eot|woff2)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

module.exports = config;