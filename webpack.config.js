const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './dev/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './dev/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './dev',
        port: 8000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
                HtmlWebpackPluginConfig
             ]
}
