import json from "@rollup/plugin-json";
import reslove from "@rollup/plugin-node-resolve";
// 所有 Rollup 支持的格式
// const formats = ["es", "amd", "cjs", "iife", "umd", "system"];
// export default formats.map((format) => ({
//   input: "src/index.js",
//   output: {
//     file: `dist/bundle.${format}.js`,
//     format, // 输出格式
//   },
//   plugins:[
//     new json(),
//     new reslove()
//   ]
// }));

export default {
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es",
  },
  plugins:[
    new json(),
    new reslove()
  ]
};
