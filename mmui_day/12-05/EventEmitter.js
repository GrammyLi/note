class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }

  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((fn) => fn !== listener);
    }
  }
}

// 使用
const emitter = new EventEmitter();
const callback = (msg) => console.log(msg);
emitter.on("message", callback);
emitter.emit("message", "Hello, World!");
emitter.off("message", callback);
