为什么修改状态要使用 setState 而不是用 this.state.xxx = xxx

在 React 类组件中，修改状态应该使用 setState 而不是直接修改 this.state.xxx 的原因有几点：

异步更新: setState 是异步的，而直接修改 this.state 是同步的。React 可以对多个 setState 调用进行批处理，以提高性能并确保更新的一致性。如果直接修改 this.state，可能会导致不可预料的行为和状态不一致。

性能优化: React 可以对 setState 进行批处理和优化，以最小化 DOM 更新的次数。直接修改 this.state 会导致 React 无法有效地进行这种优化，从而可能导致不必要的重渲染和性能问题。

触发生命周期方法和更新生命周期: 当使用 setState 更新状态时，React 会相应地触发组件的生命周期方法（如 shouldComponentUpdate、componentDidUpdate），从而使组件能够在状态变化时做出相应的响应和更新。

数据流向一致性: 使用 setState 确保了数据流向的一致性和可维护性。React 的单向数据流模型要求所有的数据变化都是通过 props 和 state 来驱动的，直接修改 this.state 会破坏这种模型，增加了代码的复杂性和维护成本。

因此，为了确保 React 组件的正确性、性能和可维护性，推荐使用 setState 来修改状态。