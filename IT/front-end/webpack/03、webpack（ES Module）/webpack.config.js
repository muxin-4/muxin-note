const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.(png|svg|jpe?g|gif|webp)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			}
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}