会导致再次 render ，返回了新的值，


浏览器只会渲染第二次 render 返回的值，这样可以避免闪屏。
但是 useEffect 是在真实的 DOM 渲染之后才会去执行，这会造成两次 render ，有可能会闪屏。
实际上 useLayoutEffect 会更接近 componentDidMount 的表现，它们都同步执行且会阻碍真实的 DOM 渲染的。

