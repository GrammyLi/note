function PromiseTry(fn) {
  return new Promise((resolve, reject) => {
    try {
      // 调用函数并捕获结果
      const result = fn();
      // 判断是否是 Promise
      if (result && typeof result.then === "function") {
        // 如果是 Promise，链式调用
        result.then(resolve).catch(reject);
      } else {
        // 如果是同步值，直接 resolve
        resolve(result);
      }
    } catch (err) {
      // 捕获函数执行中的同步错误
      reject(err);
    }
  });
}

// test
const fn = () => Promise.resolve(3);
PromiseTry(fn).then((res) => {
  console.log(res);
});
