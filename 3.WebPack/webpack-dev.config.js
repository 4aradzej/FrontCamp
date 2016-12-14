var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./app/main.js','./css/main.css'],
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
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "underscore-template-loader"
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ]
    },
    devtool: 'eval',
    devServer: {
        hot: true,
        contentBase: './app',
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sky Sports News',
            filename: 'index.html',
            template: 'app/app-template.html',
            devServer: 'http://localhost:3001',
            inject: 'body'
        })
    ],
    watch: true
}