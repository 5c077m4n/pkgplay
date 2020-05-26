// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { BannerPlugin } = require('webpack');

module.exports = function (env = {}, argv) {
	return {
		entry: './src/index.ts',
		mode: env.prod ? 'production' : 'development',
		devtool: env.prod ? false : 'inline-cheap-source-map',
		target: 'node',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules|__tests__|\.test\.ts/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, './dist'),
		},
		plugins: [
			new BannerPlugin({
				banner: '#!/usr/bin/env node',
				raw: true,
			}),
		],
	};
};
