const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/typeface.js'
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
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}