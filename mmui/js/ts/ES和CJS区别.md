1.语法差异

ES 使用import 和 export 关键字进行模块的导入和导出

CJS 使用 require() 和 module.exports 进行模块的导入和导出

2.加载方式

ESM 则采用异步加载模块的方式，即在模块加载过程中不会阻塞代码执行。这使得ESM在加载大型模块或并行加载多个模块时更具优势。

CJS 采用同步加载模块的方式，即在代码执行过程中按需加载模块。这意味着在模块被完全加载之前，代码会阻塞等待



3.静态编译

ESM 模块在静态阶段就被编译并分析模块的依赖关系。这使得编译器能够静态地确定模块之间的依赖关系，从而进行优化，如Tree Shaking（删除未使用的代码）

CJS 模块则在运行时解析和执行，并且可以有条件地导入和导出模块


在浏览器中使用 ES6 的模块化支持，在 Node 中使用 commonjs 的模块化支持


es6: import / export
commonjs: require / module.exports / exports


require与import的区别

require支持 动态导入，import不支持，正在提案 (babel 下可支持)
require是 同步 导入，import属于 异步 导入
require是 值拷贝，导出值变化不会影响导入值；import指向 内存地址，导入值会随导出值而变化

 https://vue3js.cn/interview/es6/module.html#%E4%B8%80%E3%80%81%E4%BB%8B%E7%BB%8D
 