const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// babel 库
// {
// 	"plugins": [
// 		[
// 			"@babel/plugin-transform-runtime",
// 			{
// 				"absoluteRuntime": false,
// 				"corejs": 2,
// 				"helpers": true,
// 				"regenerator": true,
// 				"useESModules": false
// 			}
// 		]
// 	]
// }

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true
	},
}

module.exports = merge(commonConfig, devConfig);