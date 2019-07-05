const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	plugins: [
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		})
	]
}

module.exports = merge(commonConfig, prodConfig);