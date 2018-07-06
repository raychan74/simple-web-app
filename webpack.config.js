const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true
	},
	mode: 'development',
	module: {
		rules: [
			{
				exclude: path.resolve(__dirname, 'node_modules'),
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'env'],
							plugins: ['transform-class-properties']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};
