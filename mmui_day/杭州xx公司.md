## 事件冒泡？列表中删除元素时绑定事件怎么处理？

#### 事件冒泡

**事件冒泡**是指事件从最深的 DOM 节点向上传递的过程，直到到达 `document` 或 `window`。在这个过程中，事件会先触发最内层的元素，然后向父元素逐层传递，直到达到文档根节点。冒泡顺序是：

- 事件首先在目标元素上触发。
- 然后事件会逐层向上传播到父元素。
- 最后事件会传播到 `document` 或 `window`。

**如何防止事件冒泡**：

- 使用 `event.stopPropagation()` 来阻止事件继续冒泡。

#### 列表中删除元素时绑定事件

如果你在一个列表中删除某个元素，而事件监听器是直接绑定在元素上的，那么当删除该元素后，绑定的事件会丢失。为了避免这种问题，通常使用 **事件委托**。

**事件委托**： 通过将事件绑定到父元素（比如列表的容器）上，而不是每个单独的列表项。当列表项被点击时，事件会从目标元素冒泡到父元素，然后父元素会根据事件目标来处理相应的事件。

```jsx
const handleClick = (event) => {
  if (event.target.matches('.item')) {
    // 处理点击事件
  }
};

const List = ({ items }) => (
  <ul onClick={handleClick}>
    {items.map(item => (
      <li className="item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);
```

这样，即使列表中的项被删除，父元素的事件处理器仍然有效。

------

### 2. **rem和px的区别，好处？UI给出的图是px的，如何转换成rem?**

#### rem 和 px 的区别

- **px（像素）**：是一个绝对单位，表示显示设备上的固定像素量。它的尺寸和屏幕分辨率有关，不会响应用户的视口或缩放设置。
- **rem（相对单位）**：相对于根元素（`<html>`）的字体大小（通常是 16px）。1rem 就等于根元素的字体大小。

#### rem 的好处

- **响应式设计**：rem 是相对单位，适应不同的屏幕和用户设置。如果用户在浏览器中改变了根元素的字体大小，所有使用 rem 的元素都会按比例调整。
- **更易于管理**：在设计中使用 rem，可以通过调整根元素的字体大小，动态地调整整个页面的布局，而不需要修改每个元素的样式。

#### 如何转换 px 为 rem？

- 假设根元素的 `font-size` 是 16px，那么 1rem = 16px。
- **公式**：`rem = px / 根元素的字体大小`。

例如：

- 16px 转换为 rem：`16px / 16px = 1rem`
- 32px 转换为 rem：`32px / 16px = 2rem`

使用插件

```js
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 16, // 1rem等于16px
      propList: ['*']
    })
  ]
}
```

### 3. **React中setState直接传入值和传入回调函数的区别？**

#### setState直接传入值

```jsx
this.setState({ count: 1 });
```

在这个情况下，`setState` 会同步地更新 `count`，但是 React 在批处理更新的时候会合并多个 `setState` 操作，因此 `this.state` 可能不是即时更新的。

#### setState传入回调函数

```jsx
this.setState((prevState) => ({ count: prevState.count + 1 }));
```

在这种情况下，`setState` 接收一个回调函数。该回调函数会接收到前一个 `state`，然后返回新的 `state`。这个方式可以保证多个 `setState` 更新操作在合并时不会丢失数据，并且是基于最新的 `state` 进行更新。

### 4. **useEffect的setup函数返回的cleanup函数什么时候执行？**

`useEffect` 中的 **清理函数（cleanup function）** 在组件卸载时，或者在依赖项发生变化时执行。具体来说：

- **组件卸载时**：如果你返回一个清理函数，它会在组件卸载时执行。
- **依赖项变化时**：如果 `useEffect` 依赖的值发生变化，清理函数会在每次依赖变化前执行。

```jsx
useEffect(() => {
  // setup

  return () => {
    // cleanup
  };
}, [dependency]); // cleanup会在依赖项变化时触发
```

### 5. **useRef为什么能作缓存？**

`useRef` 能作为缓存是因为它在组件的整个生命周期内保持不变，不会像 `state` 那样在重新渲染时重新创建。`useRef` 返回一个 `current` 对象，任何时候修改 `current` 都不会触发重新渲染。因此，可以用它来缓存数据、DOM 引用等不需要触发渲染的东西。

```jsx
const count = useRef(0);

const increment = () => {
  count.current += 1;
  console.log(count.current); // 不会触发重新渲染
};
```

### 6. **useContext的用法？有什么问题？**

`useContext` 是 React 提供的钩子，用于访问上下文数据。它让你能够跨组件树传递数据，而不需要手动传递 props。

```jsx
const MyContext = React.createContext();

const Parent = () => {
  const value = 'Hello, world!';
  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};
```

#### 问题：

- **性能问题**：`useContext` 会使组件重新渲染，即使上下文的值没有变化。为了避免不必要的重新渲染，通常需要配合 `React.memo` 或者 `useMemo` 来优化。

### 7. **React Diff 算法？**

React 的 **Diff 算法** 通过比较当前虚拟 DOM 和之前的虚拟 DOM 来决定如何高效更新真实 DOM。它采用了以下假设：

1. **同一层级比较**：React 会通过树的层级比较来确定哪些元素有变化。只有同层级节点才会进行比较。
2. **单向更新**：React 假设 DOM 树不会发生重排序，因此如果同一个组件的某个节点发生变化，它会替换掉整个组件。
3. **最小化更新**：React 通过使用 **Key** 来尽量减少 DOM 的更新，如果组件的 `key` 不同，React 会直接将旧节点销毁并新建。

### 8. **Zustand的原理？为什么在组件A修改了store中的state，组件B的UI也会更新？**

Zustand 是一个轻量级的状态管理库。其原理是基于 **订阅模式**，当组件订阅了某个状态时，一旦状态发生变化，所有订阅该状态的组件都会重新渲染。

#### 为什么在组件A修改了store中的state，组件B的UI会更新？

Zustand 内部会管理一个全局的 store，并且当状态发生变化时，订阅该状态的组件会被触发更新。

```jsx
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

const ComponentA = () => {
  const increment = useStore((state) => state.increment);
  return <button onClick={increment}>Increment</button>;
};

const ComponentB = () => {
  const count = useStore((state) => state.count);
  return <div>{count}</div>;
};
```

`ComponentA` 改变 `count` 后，`ComponentB` 会自动重新渲染。

### 9. **Next.js 创建的是多页应用还是单页？SSR有实践吗？怎么理解SSR？**

Next.js 是一个 **单页应用**，但它支持 **服务器端渲染（SSR）** 和 **静态生成（SSG）**。通过 `getServerSideProps` 和 `getStaticProps`，Next.js 可以在服务器端渲染页面并发送给客户端，减少客户端的渲染时间和初次加载的资源。

#### SSR（Server-Side Rendering）

**服务器端渲染（SSR）** 是指页面在服务器端生成后发送给浏览器，而不是在浏览器端通过 JavaScript 渲染。

### 10. **依赖 JSON Schema 的动态表单中的表单项联动怎么做**

表单项联动通常可以通过监听某些字段的变化，然后动态更新其他字段的值或显示状态。通过 JSON Schema 定义表单，并结合状态管理来实现。

例如，可以使用 `useState` 存储表单的值，并根据一个字段的值去更新其他字段：

```jsx
const [formData, setFormData] = useState({ field1: '', field2: '' });

useEffect(() => {
  if (formData.field1 === 'someValue') {
    setFormData((prevData) => ({
      ...prevData,
      field2: 'newValue',
    }));
  }
}, [formData.field1]);
```

这种方式可以处理动态的表单项更新和联动。