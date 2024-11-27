// (六)
// 问题
// 如何判断一个对象是空对象？
// - Object.keys() -> length
// - Reflect.ownKeys() -> length
// - for in -> 变量循环次数统计，0
// - JSON.stringify() ==== '{}'
// (五)
// 问题
// arr.map() 如何没有返回值，将会发生什么？
// [1, 2, 3].map(() => {}); // [undefined, undefined, undefined]      // (七)
// meta标签
// <meta> 标签提供关于 HTML 文档的 ( 元数据 )
// - 它不会显示在页面上，但是对于机器是可读的
// - 可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务
// - 位于 head 标签中
// 7.1
// meta标签有哪些属性？
// <meta charset="UTF-8" />
// <meta http-equiv="X-UA-Compatible" content="IE=edge" /> 百度会自动对网页进行转码，这个标签是禁止百度的自动转码
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// <meta name="keywords" content="your keywords">
// <meta name="description" content="your description">
// <meta name="author" content="author,email address">
