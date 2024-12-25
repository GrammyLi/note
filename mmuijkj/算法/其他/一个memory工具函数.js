// 实现一个memory工具函数，要求对函数返回结果做缓存，当第二次调用时无需调用函数即刻返回缓存值

function memory(func) {
  const cache = new Map();
  return async (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = await func(...args);
    cache.set(key, result);
    return result;
  };
}

function add(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

(async () => {
  const memoizedAdd = memory(add);
  console.log(await memoizedAdd(1, 2));
  console.log(await memoizedAdd(3, 4));
  console.log(await memoizedAdd(5, 6));
})();
