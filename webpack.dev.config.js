const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:  [
        'react-hot-loader/patch',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    context: path.join(__dirname, 'client'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'build')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', 'config.js'],

        modules: [
          'node_modules',
          path.join(__dirname, 'client')
        ],
    },
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 2,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        },
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ],
    }
};