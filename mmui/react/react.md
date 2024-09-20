

有时候在 React 中连续调用两次 setState 只会执行一次，
是因为 React 会对连续的 setState 进行合并操作。当多次调用 setState 时，React 会将这些更新放入队列中，在合适的时机将队列中的更新合并并批量执行，以提高性能。


react setState 是异步的。当调用 setState 方法时，React 会将状态更新加入到更新队列中，并且在适当的时机（比如下一个事件循环周期）执行状态更新操作。这样可以将多个 setState 调用合并，提高性能
