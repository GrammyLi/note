// 核心原理
// Vue 的响应式是通过 依赖收集 和 触发更新 实现的。
// Vue2 使用 Object.defineProperty 劫持对象的 getter 和 setter。
// Vue3 使用 Proxy，实现更高效的响应式。
// 依赖收集：

// 当数据被读取时，在 getter 中收集依赖。
// 依赖存储在一个称为 Dep 的类中。
// 触发更新：

// 当数据被修改时，在 setter 中触发依赖，通知视图重新渲染

class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach((effect) => effect());
  }
}

let activeEffect = null;

function reactive(obj) {
  const dep = new Dep();
  return new Proxy(obj, {
    get(target, key) {
      dep.depend();
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      dep.notify();
      return true;
    },
  });
}

// 示例
const state = reactive({ count: 0 });

function effect(fn) {
  activeEffect = fn;
  fn();
  activeEffect = null;
}

effect(() => {
  console.log("Count:", state.count);
});

state.count = 1; // 输出：Count: 1
