var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'build.js'
	},
	externals: {
		mui: 'mui'
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192' //&name=imgs/[hash:8].[name].[ext]
			}, {
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		host: "0.0.0.0",
		port: 8080,

		historyApiFallback: true,
		overlay: true,
		disableHostCheck: true // ngxin代理需要配置

	}
};