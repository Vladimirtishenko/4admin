const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
	'faker',
	'lodash',
	'react',
	'react-redux',
	'react-dom',
	'redux',
	'react-input-range',
	'redux-form',
	'redux-thunk'
];

const config = {
	entry: {
		app: './assets/js/app.js',
		vendor: VENDOR_LIBS
	},
	output: {
		path: path.resolve(__dirname, 'assets/build'),
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}, 
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new htmlWebpackPlugin({
			template: 'assets/index.html'
		}),
		/*new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})*/
	]
}

module.exports = config;