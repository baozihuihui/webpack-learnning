const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口文件声明
    entry:"./src/index.js",
    // 出口文件声明
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    // webpack内置优化功能
    optimization:{
        // 模块只导出被使用的成员(但未使用代码不会被删除)
        usedExports:true,
        // 压缩输出结果(会将未使用代码删除)
        // minimize:true,
        // 尽可能合并摸个模块
        concatenateModules:true
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