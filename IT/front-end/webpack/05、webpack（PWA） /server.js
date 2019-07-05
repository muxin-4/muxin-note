const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const config = require('./webpack.config');
const complier = webpack(config);

const app = express();
app.use(
	webpackDevMiddleWare(complier, {
		publicPath: config.output.publicPath
	})
);

app.listen(3001, () => {
	console.log('server is running');
});