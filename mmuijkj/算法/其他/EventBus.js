class EventBus {
  constructor() {
    this.events = {};
  }

  // 监听事件
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // 触发事件
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => {
        callback(...args);
      });
    }
  }

  // 移除事件
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  }
}

// 示例
const bus = new EventBus();

function onTest(data) {
  console.log("事件触发，数据为：", data);
}

// 注册事件
bus.on("test", onTest);

// 触发事件
bus.emit("test", { msg: "Hello EventBus" }); // 输出：事件触发，数据为：{ msg: 'Hello EventBus' }

// 移除事件
bus.off("test", onTest);
bus.emit("test", { msg: "Hello Again" }); // 无输出
