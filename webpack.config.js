const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { text: '/\.js$/', use: 'js-loader' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './view/index.html',
        }),
    ],
}