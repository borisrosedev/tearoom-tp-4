const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    entry: "./main.ts",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.(webp|jp(e)g|png|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader' 
            },
            {
                test: /\.s[ac]ss$/, 
                use : ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HTMLPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "assets", to : "assets"
                }
            ]
        })
    
    ]
}