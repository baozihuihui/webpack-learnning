const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口文件声明
    entry:"./src/main.js",
    // 出口文件声明
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    // webpack内置优化功能
    optimization:{
        sideEffects:true
    },
    // 模块处理 loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    // 插件注册
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            meta: {
              viewport: "width=device-width",
            },
            template:'./index.html'
          })
    ]
}