var path = require("path");
const CleanWepackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015']
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWepackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    mode: "development",
    // resolve: {
    //     alias: {
    //         srcRoot: path.resolve(__dirname, "/src")
    //     }
    // }





}