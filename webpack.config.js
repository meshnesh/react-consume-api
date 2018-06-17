'use strict';

const path = require('path');
const webpack = require('webpack');
const port = process.env.PORT || 3000;

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'babel-polyfill',
		`webpack-dev-server/client?http://localhost:${port}`,
		'webpack/hot/only-dev-server',
		'./src/app.js',
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'app.bundle.js',
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	eslint: {
		configFile: '.eslintrc',
		failOnWarning: false,
		failOnError: false
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react','stage-0'],
				plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
			}
		}]
	}
};
