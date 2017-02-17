"use strict";

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('build.min.css');
const poststylus = require('poststylus');
const rucksack = require('rucksack-css');
const stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader?minimize!stylus-loader");
const NODE_ENV = process.env.NODE_ENV || "development";

let config = [{
    name: 'js',
    entry: {
        app: './assets/js/app.js',
    },
    output: {
        path: "./assets/build/",
        filename: 'build.[name].js',
        publicPath: '/4admin/assets/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js", "css", "styl", "woff", "ttf", "otf", "jpg"]
    }
}, {
    name: 'styles',
    entry: {
        build: "./assets/styl/builder.styl",
    },
    exclude: '/node_modules/',
    output: {
        path: './assets/build/',
        filename: '[name].min.css'
    },
    watch: true,
    module: {
       loaders: [
        {
            test: /\.styl$/,
            loader: stylusLoader
        },
        {
            test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg|otf)$/, 
            loader: 'url-loader?limit=100000'
        }
        ]
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js", ".css", ".styl"]
    },
    stylus: {
      use: [
        poststylus(rucksack({
          autoprefixer: true
        }))
      ]
    },
    plugins: [
        new ExtractTextPlugin("[name].min.css")
    ]
}];


module.exports = config;