https://q.shanyue.tech/fe/dom/456

 defer 与 async 的区别如下:

相同点: 异步加载 (fetch)
不同点:
async 加载(fetch)完成后立即执行 (execution)，因此可能会阻塞 DOM 解析；
defer 加载(fetch)完成后延迟到 DOM 解析完成后才会执行(execution)**，但会在事件 DomContentLoaded 之前