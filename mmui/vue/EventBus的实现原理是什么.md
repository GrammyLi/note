EventBus 的实现原理主要基于 JavaScript 的发布-订阅（Pub/Sub）模式。发布-订阅模式是一种设计模式，用于解耦发布者和订阅者之间的关系，使得它们可以独立地进行通信。

在 EventBus 中，通常有三个核心的概念：

事件中心（EventEmitter）：负责维护事件与回调函数之间的关系，它提供了注册事件、触发事件以及移除事件等方法。

订阅者（Subscriber）：负责监听特定的事件，并在事件被触发时执行相应的回调函数。

发布者（Publisher）：负责触发特定的事件，并向事件中心发布事件。

实现一个简单的 EventBus 可以通过 JavaScript 对象的方式来实现，示例代码如下：

```js
class EventBus {
  constructor() {
    this.events = {};
  }

  // 注册事件
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // 触发事件
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback) => {
        callback(...args);
      });
    }
  }

  // 移除事件
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (cb) => cb !== callback
      );
    }
  }
}

const eventBus = new EventBus();

// 订阅事件
eventBus.on("message", (message) => {
  console.log("Received message:", message);
});

// 发布事件
eventBus.emit("message", "Hello, EventBus!");
```
