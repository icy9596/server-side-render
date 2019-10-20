const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        client: path.resolve(__dirname, '../client'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/client'),
    },
});