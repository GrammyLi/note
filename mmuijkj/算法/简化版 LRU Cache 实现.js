class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // 用 Map 来存储 key 和 value，保持插入顺序
  }

  // 获取缓存中的值
  get(key) {
    if (!this.cache.has(key)) return -1; // 如果不存在，返回 -1

    // 如果存在，将该 key 移到末尾，表示最近使用
    const value = this.cache.get(key);
    this.cache.delete(key); // 删除旧的键值对
    this.cache.set(key, value); // 重新插入到 Map 的末尾
    return value;
  }

  // 放入新的键值对
  put(key, value) {
    if (this.cache.has(key)) {
      // 如果 key 已存在，删除旧的值并重新插入
      this.cache.delete(key);
    }

    // 如果缓存已满，移除最早插入的元素（即 Map 的第一个元素）
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // 删除 Map 的第一个元素
    }

    // 将新的 key-value 插入到 Map 中
    this.cache.set(key, value);
  }
}

// 测试用例
const lru = new LRUCache(3);
lru.put(1, 1); // 缓存: {1=1}
lru.put(2, 2); // 缓存: {1=1, 2=2}
lru.put(3, 3); // 缓存: {1=1, 2=2, 3=3}
console.log(lru.get(1)); // 返回 1
lru.put(4, 4); // 缓存: {2=2, 3=3, 4=4}，移除 key 1
console.log(lru.get(1)); // 返回 -1 (未找到)
console.log(lru.get(2)); // 返回 2
