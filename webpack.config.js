const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: '/\.js$/', use: 'js-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './view/index.html',
        }),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 9000,
    },
}