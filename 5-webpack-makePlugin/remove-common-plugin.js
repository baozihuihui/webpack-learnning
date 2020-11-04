// 插件必须是一个函数或者是一个包含 apply 方法的对象，
// 一般我们都会定义一个类型，在这个类型中定义 apply 方法
// 然后在使用时，再通过这个类型来创建一个实例对象去使用这个插件

class RemoveCommentsPlugin {
  // compiler => 包含了我们此次构建的所有配置信息
  apply(compiler) {
    console.log(">>> RemoveCommentsPlugin 启动");
    // emit钩子，能在输出前钩子
    compiler.hooks.emit.tap("RemoveCommentsPlugin", (compilation) => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // console.log(name); // 文件名
        // console.log(compilation.assets[name].source()) // 输出文件内容
        if(name.endsWith('.js')){
            const contents = compilation.assets[name].source()
            const noComments = contents.replace(/\/\*{2,}\/\s?/g,'')
            // 钩子要求处理后返回处理内容以及一个size(字符串大小)
            compilation.assets[name] = {
                source:()=>noComments,
                size:()=>noComments.length
            }
        }
      }
    });
  }
}

exports.RemoveCommentsPlugin = RemoveCommentsPlugin;
