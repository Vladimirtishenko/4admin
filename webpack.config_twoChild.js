const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

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

const config = [{
	name: 'js',
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
				test: /\.jsx?$/,
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest']
		}),
		new htmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
		}),
		/*new webpack.optimize.UglifyJsPlugin({
		    compress: {
		        warnings: false
		    }
		})*/
	]
},
{
	name: 'stylus',
	entry: {
		static: './assets/styl/core/core.styl',
	},
	output: {
		path: path.resolve(__dirname, 'assets/build'),
		filename: '[name].[chunkhash].min.css'
	},
	module: {
		rules: [
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
		new ExtractTextPlugin("[name].[chunkhash].min.css"),
		new htmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
		}),
	]
}]

module.exports = config;