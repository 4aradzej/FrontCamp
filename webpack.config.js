var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './scripts/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main-bundled.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}