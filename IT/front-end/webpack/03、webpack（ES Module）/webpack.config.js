const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [
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
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2 // 当 scss 文件引用 scss 文件时，sass-loader 和 postcss-loader 生效
						}
					},
					'sass-loader',
					'postcss-loader'
				]
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}