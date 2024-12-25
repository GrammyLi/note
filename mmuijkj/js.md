## script defer 和 async 的区别

1. defer 在 DOM 加载完成后执行, 多个的话按照顺序执行

2. async 谁先下载完成谁就先执行

## 浏览器事件循环机制

1. 执行栈和任务队列

2. 宏任务和微任务

## javaScript 变量提升

考察 es5, var

## 箭头函数相对普通函数

没有 this/arguments（不能继承，不能 new）

## async/await 相对 Promise

同步代码的异步编程方式

```js
async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

// 相当于;
new Promise((resolve, reject) => {
  console.log(1);
  resolve(async2());
}).then(() => {
  console.log(2);
});
```


## 闭包


