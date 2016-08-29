var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');


var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux-thunk']
    },
    output: {
        filename: "app.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
        //new ExtractTextPlugin('./style.css', {
        //    allChunks: true
        //}),
        HTMLWebpackPluginConfig
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"],
                //loaders: [ExtractTextPlugin.extract('style', 'css!sass')],
                include: path.join(__dirname, '')

            },
            {test: /\.jpg$/, loader: "url-loader", query: {mimetype: "image/jpg"}},
            {test: /\.png$/, loader: "url-loader", query: {mimetype: "image/png"}},
            {test: /\.woff.*$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
            {test: /\.ttf.*$/, loader: "file-loader"},
            {test: /\.eot.*$/, loader: "file-loader"},
            {test: /\.svg.*$/, loader: "file-loader"}

        ]
    }
};