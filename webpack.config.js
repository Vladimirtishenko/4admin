const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtraneousFileCleanupPlugin = require('webpack-extraneous-file-cleanup-plugin');

const VENDOR_LIBS = [
	'faker',
	'lodash',
	'react',
	'react-redux',
	'react-dom',
	'redux',
	'react-router-dom',
	'react-input-range',
	'redux-form',
	'redux-thunk',
	'md5'
];

const config = {
	entry: {
		app: './assets/js/app.js',
		vendor: VENDOR_LIBS,
	},
	output: {
		path: path.resolve(__dirname, 'assets/build'),
		filename: '[name].[chunkhash].js',
		publicPath: ''
	},
	stats: {
    	colors: true
  	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/
			}, 
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			},
			{
               test: /\.styl$/, 
               loader: ExtractTextPlugin.extract({ fallback: 'style-loader', 
                    use: [
                    'css-loader?minimize!',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer()]
                            }
                        }
                    },
                    'stylus-loader'
                    ]
                }) 
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/, 
                loader: 'url-loader?limit=100000'
            }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
		}),
		new ExtractTextPlugin("[name].[chunkhash].min.css"),
		/*new ExtraneousFileCleanupPlugin({
		  minBytes: 1024
		}),*/
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