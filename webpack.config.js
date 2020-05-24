const path = require('path');

module.exports = function (env = {}, argv) {
	return {
		entry: './src/index.ts',
		mode: env.prod ? 'production' : 'development',
		devtool: env.prod ? 'source-maps' : 'eval',
		target: 'node',
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
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
	};
};
