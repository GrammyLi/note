可以参考：useEffect 和 useLayoutEffect 的区别 - 掘金 和 useEffect和useLayoutEffect到底有什么区别？ 这两篇文章

useLayoutEffect 和 componentDidMount 和 componentDidUpdate 触发时机一致（都在在 DOM 修改后且浏览器渲染之前）；
useLayoutEffect 要比 useEffect 更早的触发执行；
useLayoutEffect 会阻塞浏览器渲染，切记执行同步的耗时操作