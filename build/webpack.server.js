const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
    node: {
		__filename: false,
		__dirname: false,
    },
	mode: 'development',
    target: 'node',
    entry: {
        server: path.resolve(__dirname, '../server'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/server'),
    },
    externals: [
        nodeExternals()
    ],
})