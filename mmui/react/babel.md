babel 原理

（1）babel 的转译过程分为三个阶段：parsing、transforming、generating，以 ES6 代码转译为 ES5 代码为例，babel 转译的具体过程如下：

•ES6 代码输入

•babylon 进行解析得到 AST

•plugin 用 babel-traverse 对 AST 树进行遍历转译,得到新的 AST 树

•用 babel-generator 通过 AST 树生成 ES5 代码
