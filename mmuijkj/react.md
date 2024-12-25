## react vue 区别

1. 模版语法： jsx, 内置指令模版语法

## 什么是 virtual DOM，它的引入带了什么好处

1. 跨平台

## vue react 为何循环时必须使用 key？

1. 匹配到 key 只移动元素 性能较好

2. 未匹配到 key 则删除重建 性能较差

## Redux 基本概念

1. store 单一的数据源

2. action {type: 'INCREMENT', payload: 1}

3. reducer 是一个纯函数

## React 生命周期

1. 挂载阶段 Mounting

```shell
constructor
componentWillMount
render
componentDidMount
```

2. 更新 updating

```shell
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
```

3. 卸载阶段（Unmounting）

componentWillUnmount


## diff算法

https://juejin.cn/post/7114177684434845727?searchId=2024083021533382EFDD5549BFE0DC35E4#heading-1


## 虚拟 dom 的优缺点

缺点：首次渲染较慢
优点：减少 DOM 操作、减少回流与重绘， 性能下限保证和局部更新能力
