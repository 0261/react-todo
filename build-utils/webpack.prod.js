const {appEntry} = require('./common-paths');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    mode: 'production',
    entry: {
        app: [`${appEntry}/index.js`]
    },
    output: {
        filename: 'static/[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                camelCase: true,
                                sourceMap: true
                            }
                        },
                        // css-loader 전에 PostCSS이 실행되어 압축(minify)하고 CSS 룰을 적용하고 
                        // 자동 전처리(autoprefixer)를 실행한다.
                        // 자동 전처리 단계에서 최신 브라우저 2 사양을 사용한다.
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {
                                    ctx: {
                                        autoprefixer: {
                                            browsers: 'last 2 versions'
                                        }
                                    }
                                }
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/styles.[hash].css',
            allChunks: true
        })
    ]
};
module.exports = config;