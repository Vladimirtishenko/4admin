const express = require('express');
const app = express();
const path = require('path');


if(process.env.NODE_ENV != 'production'){
	const webpackMiddleware = require('webpack-dev-middleware');
	const webpack = require('webpack');
	const webpackConfig = require('./webpack.config.js');
	app.use(webpackMiddleware(webpack(webpackConfig), {
		publicPath: '/',
		index: "index.html"
	}));
} else {
	app.get('*', function(req, res) {
	  res.sendFile(path.join(__dirname, '/assets/build/index.html'));
	});
	app.use(express.static(__dirname + '/assets'));
}


app.listen(3030, () => console.log('listen 3030'));