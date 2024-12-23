## React 18 生命周期

constructor
render
componentDidMount

getDerivedStateFromProps

componentWillReceiveProps

shouldComponentUpdate
componentWillUpdate
componentDidUpdate

componentWillUnmount

## React 组件通讯

## state 与 props 有什么区别

1. 一个外部一个内部呢
2. 修改怎样修改数据呢

## 请列举几个常用的 Hooks

## useEffect 和 useLayoutEffect 的区别

useEffect: 它的执行是在浏览器完成布局和绘制之后，因此它不会阻塞浏览器更新屏幕的过程。
例如，网络请求、订阅、手动 DOM 操作等。

useLayoutEffect: 它在浏览器执行任何绘制之前同步执行。这意味着在 useLayoutEffect 中执行的代码会阻塞页面的渲染，直到执行完毕。
例如，测量 DOM 元素的大小和位置、强制 DOM 更新等。

## React 中的 Portals

Portals 提供了一种将组件渲染到父组件 DOM 结构之外的能力，而不会打破 React 的组件树结构
它非常适合需要突破 DOM 层次结构限制的场景，如模态框、工具提示等。

## React 中 useRef Hook 的使用

useRef 是 React 提供的一个 Hook，允许你创建一个可变的、持久的引用对象。这个引用对象在组件的整个生命周期内保持不变，且不会因为组件的重新渲染而重新创建。

useRef 的常见用途
访问 DOM 元素

## 自定义 Hooks 在 React 中的实现

复用逻辑：当多个组件中需要共享相同的逻辑时，可以将这些逻辑提取到一个自定义 Hook 中，而不是在每个组件中重复代码。
简化组件代码：通过将复杂的逻辑封装在自定义 Hook 中，可以使组件代码更简洁、易于维护。
逻辑隔离：将状态逻辑和副作用逻辑隔离到自定义 Hook 中，使得组件的关注点更加明确，易于管理。

## React 中的 Fragment

它允许你将一组子元素包裹在一起，而不额外生成任何 DOM 节点

作用
避免额外的 DOM 节点：使用 Fragment 可以避免在渲染时生成不必要的包装元素，比如 div 或 span，使得输出的 HTML 更加简洁。
提升性能：减少无意义的 DOM 层级，进而提升页面的性能，特别是在构建复杂组件结构时，避免因多余的节点导致的布局和样式问题。
清晰的组件结构：使组件结构更加清晰和易于维护，避免由于多余的包装元素而增加的复杂度。

## 如何在 React 中使用 Context API

React 的 Context API 用于在组件树中共享数据，而不需要通过每层组件手动传递 props。这对于需要在多层嵌套的组件之间传递全局数据（如用户信息、主题、语言设置等）非常有用。

Context 的工作原理
创建 Context：使用 React.createContext 创建一个新的 Context 对象。
提供（Provider）数据：通过 Context.Provider 组件在组件树的上层提供数据。所有使用此 Provider 包裹的子组件都可以访问该数据。
消费（Consumer）数据：通过 Context.Consumer 或 useContext Hook 在子组件中消费数据。
