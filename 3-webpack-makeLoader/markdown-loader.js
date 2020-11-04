// 每个 Webpack 的 Loader 都需要导出一个函数，这个函数就是我们这个 Loader 对资源的处理过程，
// 它的输入就是加载到的资源文件内容，输出就是我们加工后的结果。
// 我们通过 source 参数接收输入，通过返回值输出。

const marked = require("marked");
module.exports = (source) => {
  // 1. 将 markdown 转换为 html 字符串
  const html = marked(source);
  // html => '<h1>About</h1><p>this is a markdown file.</p>'
  // 2. 将 html 字符串拼接为一段导出字符串的 JS 代码
  const code = `module.exports = ${JSON.stringify(html)}`;
  return code;
  // code => 'export default "<h1>About</h1><p>this is a markdown file.</p>"'
};
