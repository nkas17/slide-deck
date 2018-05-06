const { resolve } = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
// const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	resolve: {
		modules: [
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.json', '.css'],
	},
	entry: [
		// This needs to be loaded first for it to work in IE11 with react 15.4
		// https://github.com/facebook/react/issues/8379
		// 'babel-polyfill',

		// the entry point of our app
		'./index.jsx',
	],
	output: {
		// the output bundle
		filename: 'bundle.js',
	},

	// tell webpack where to get src files
	context: resolve(__dirname, 'src'),

	// source maps for easy debugging
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
				],
				include: /src/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			// { test: /\.json$/, type: 'javascript/auto', loader: 'json-loader' },
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				loader: 'file-loader?name=[name].[ext]',
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin([
			// Copy directory contents to {output}/to/directory/
			{ from: 'assets', to: 'assets' },
		]),
		// Dynamically create the index.html file
		new HtmlWebpackPlugin({
			template: '../src/index.html',
		}),
	],
};
