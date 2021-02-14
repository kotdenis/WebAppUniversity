'use strict';

const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const path = require('path');

const bundleFolder = "./wwwroot/assets/";
const srcFolder = "./App/";

module.exports = {
    entry: [
        srcFolder + "index.jsx"
    ],
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        publicPath: 'assets/',
        path: path.resolve(__dirname, bundleFolder)
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["stage-0", "react"]
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(jpg|gif|png|jpe?g|svg)$/i,
                use: ['file-loader', 'image-webpack-loader']
            }
        ]
    },
    plugins: [
    ]
};