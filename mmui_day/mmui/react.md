## react 渲染机制

React的渲染机制大致分为以下几个步骤：

1. 组件更新触发：当组件的状态（state）或属性（props）发生变化时，React会触发重新渲染流程。
2. 虚拟DOM（Virtual DOM）更新：React会创建一个虚拟DOM对象，表示当前UI的结构。它不会直接操作真实DOM，而是先操作虚拟DOM，之后再通过差异比较更新真实DOM。
3. Diff算法：React会通过一种高效的差异算法（diffing）计算出 来比较新旧DOM的差异（最小化的更新），只更新必要的部分。
4. 渲染结果更新：根据虚拟DOM的差异，React会将需要更新的部分批量更新到真实DOM中


## react函数组建怎么避免不必要的渲染？


由于函数组件的特点是每次状态（state）或属性（props）更新时都会重新渲染

工作原理：React.memo 会对比前后两次渲染时的 props，如果 props 没有变化，React就跳过渲染步骤，直接复用上一次渲染的结果。

useMemo：用于缓存计算结果，只有依赖项（dependencies）发生变化时，才会重新计算。

useCallback：用于缓存函数实例，只有当依赖项发生变化时，才会重新创建函数实例。


合理使用useEffect


React的Suspense和React.lazy可以帮助你实现懒加载，只有在需要的时候才加载某些组件。通过懒加载，可以减少首屏渲染时的负担，从而避免不必要的资源加载和渲染。

```js
const LazyComponent = React.lazy(() => import('./LazyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```


