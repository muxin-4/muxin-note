const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	module: {
		rules: [{
			test: /\.(png|svg|jpe?g|gif|webp)$/,
			use: {
				loader: 'file-loader'
			}
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}