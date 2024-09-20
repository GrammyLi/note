webpack 是一个用于现代JavaScript应用程序的静态模块打包工具


需要通过模块化的方式来开发


使用一些高级的特性来加快我们的开发效率或者安全性，比如通过ES6+、TypeScript开发脚本逻辑，通过sass、less等方式来编写css样式代码


监听文件的变化来并且反映到浏览器上，提高开发的效率


JavaScript 代码需要模块化，HTML 和 CSS 这些资源文件也会面临需要被模块化的问题


开发完成后我们还需要将代码进行压缩、合并以及其他相关的优化



1. 静态模块打包工具
Entry：Webpack 会从一个或多个入口文件开始，分析所有依赖关系，构建依赖图。

Module：在构建依赖图的过程中，Webpack 会把每一个文件作为一个模块处理。对于不同类型的文件，Webpack 使用不同的 loader 进行处理，例如，babel-loader 用于处理 JavaScript，css-loader 用于处理 CSS。

Dependency Graph：Webpack 根据模块之间的依赖关系，生成一个包含所有模块及其依赖关系的图结构。

Chunk：Webpack 会根据这个依赖图生成一个或多个 chunk，每个 chunk 包含一组相关的模块。

Output：最后，Webpack 会把这些 chunk 转化为一个或多个文件，并输出到指定的目录。

Webpack 还提供了丰富的插件系统，开发者可以通过插件扩展 Webpack 的功能，例如，HtmlWebpackPlugin 用于生成 HTML 文件，UglifyJsPlugin 用于压缩 JavaScript 代码。
 