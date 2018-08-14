const {appEntry} = require('./common-paths');
const webpack = require('webpack');
const port = 8087 || 3000;
const config = {
    mode: 'development',
    entry: {
        app: ['babel-polyfill', `${appEntry}/index.js`]
    },
    output: {
        filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        hot: true,
        open: true
    }
};
module.exports = config;