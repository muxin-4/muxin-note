const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

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

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		hotOnly: true
	},
	entry: {
		main: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(png|svg|jpe?g|gif|webp)$/i, use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name]_[hash].[ext]',
							outputPath: 'images/',
							limit: 8129
						}
					}
				]
			},
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2, // 当 scss 文件引用 scss 文件时，sass-loader 和 postcss-loader 生效
							// modules: true // 开启 css 模块化打包
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			}
		]
	},
	plugins: [
		// htmlWebpackPlugin 会在打包结束后，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html  文件中
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(['dist']),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		usedExports: true
	},
	output: {
		publicPath: '',
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, 'dist')
	}
}