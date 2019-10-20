const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SHA256 = require('crypto-js/sha256');

module.exports = {
    mode: 'development',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            targets: {
                                browsers: ['last 2 versions'],
                            }
                        }], '@babel/preset-react']
                    }
                }
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                getLocalIdent: (context, localIdentName, localName, options) => {
                                    const resourcePath = context.resourcePath;
                                    const reg = /.+\\(.+)\.less$/;
                                    const filename = reg.exec(resourcePath)[1];
                                    const hash = SHA256(resourcePath).toString().slice(0, 8);

                                    return `${filename}_${localName}_${hash}`
                                },
                            },
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new CleanWebpackPlugin(),
    ],
    watch: true,
}