可以参考：useEffect 和 useLayoutEffect 的区别 - 掘金 和 useEffect和useLayoutEffect到底有什么区别？ 这两篇文章

useLayoutEffect 和 componentDidMount 和 componentDidUpdate 触发时机一致（都在在 DOM 修改后且浏览器渲染之前）；
useLayoutEffect 要比 useEffect 更早的触发执行；
useLayoutEffect 会阻塞浏览器渲染，切记执行同步的耗时操作


对于 React 的函数组件来说，其更新过程大致分为以下步骤：

1. 因为某个事件 state 发生变化。
2. React 内部更新 state 变量。
3. React 处理更新组件中 return 出来的 DOM 节点（进行一系列 dom diff 、调度等流程）。
4. 将更新过后的 DOM 数据绘制到浏览器中。
5. 用户看到新的页面。

useEffect 在第 4 步之后执行，且是异步的，保证了不会阻塞浏览器进程。
useLayoutEffect 在第 3 步至第 4 步之间执行，且是同步代码，所以会阻塞后面代码的执行

 