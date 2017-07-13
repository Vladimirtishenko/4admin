# Production mode only one build 

	$ npm run build


# Development mode using Webpack development server

	$ npm run serve 


# Development width Webpack development middleware

Include in app.js file 

	if(precess.env.NODE_ENV != 'production'){
		const webpackMiddleware = require('webpack-dev-middleware');
		const webpack = require('webpack');
		const webpackConfig = require('./webpack.config.js');
		app.use(webpackMiddleware(webpack(webpackConfig)));
	}

# Production width NodeJs

	Static use routing