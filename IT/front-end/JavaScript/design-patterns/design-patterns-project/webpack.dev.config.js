const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: __dirname,
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		open: true,
		port: 9000
	}
};

module.exports = config;