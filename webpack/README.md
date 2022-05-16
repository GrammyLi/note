https://www.bilibili.com/video/BV1e541197oA?spm_id_from=333.999.0.0

打包时候运行分析：
在webpack 或者 rollup中， js css 或者图片都是为模块，可以将这些资源打包为一个文件 bundle.js

rollup 打包构建是 将一些模块，已变量的形式平铺展开即可

webpack 会会生成 运行时候代码
// 维护所有模块数组
const __webpack_modules___ = [
  (module, require) => {
    const name = require(id)
  },
  (module, require) => {
    const name = 'grammyli'
    module.exports = name
  },
]

__webpack_modules__: 维护一个所有模块的数组。
将入口模块解析为 AST，
根据 AST 深度优先搜索所有的模块
并构建出这个模块数组。
每个模块都由一个包裹函数 (module, module.exports, __webpack_require__) 对模块进行包裹构成。


 
// 模块加载器 
const __webpack_require__ = (id) => {
  const module = { exports: {}}
  const m = __webpack__modules__[id](moudle, __webpack__require__)
  return module.exports
}

__webpack_require__(moduleId): 手动实现加载一个模块。
对已加载过的模块进行缓存，
对未加载过的模块，执行 id 定位到 __webpack_modules__ 中的包裹函数，执行并返回 module.exports，并缓存


__webpack_require__(0): 运行第一个模块，即运行入口模块