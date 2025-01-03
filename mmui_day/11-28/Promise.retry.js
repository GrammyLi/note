// Promise.retry 实现

// 题目
// 实现一个函数, fetchWithRetry 会自动重试3次，3次都失败则返回失败，任意一次成功直接返回

// fetch
// 1s响应，随机 fulfilled 或 reject
const fetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return Math.random() - 0.6 > 0 ? resolve("成功") : reject("失败");
    }, 1000);
  });
};

Promise.retry_Promise = (fn, times) => {
  var errCount = 0;
  function count() {
    errCount++;
    console.log("失败->", errCount);
  }

  return new Promise((resolve, reject) => {
    const retry = () => {
      fn()
        .then((res) => resolve(res)) // 成功，直接 resolve； 失败，递归执行count，直到times为0
        .catch((err) => {
          if (times) {
            count();
            retry(); // 递归，失败后重新请求
          }
          times--;
          // 失败times次后，reject
          // 同时也是改变了整个promise状态后，retry() 不会再次执行
          if (!times) {
            reject(err);
          }
        });
    };

    retry();
  });
};

Promise.retry_AsyncAwait = (fetchFn, times) =>
  new Promise(async (resolve, reject) => {
    let errCount = 0;

    // 注意: 这里的 while 循环中有异步操作，并且是 await，所以每一次循环都会根据异步函数的时间来遍历，而不是很快遍历完
    while (times--) {
      try {
        const res = await fetchFn();
        return resolve(res); // 成功，不在catch说明请求成功
      } catch (err) {
        // 在 catch 中，说明 fetchFn 执行失败
        errCount++;
        console.log("失败次数=>", errCount);

        // 失败到达 times 次后，reject
        if (!times) {
          return reject(err);
        }
      }
    }
  });

// test ->  Promise.retry_Promise
Promise.retry_Promise(fetch, 3)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// test ->  Promise.retry_AsyncAwait
// Promise.retry_AsyncAwait(fetch, 3)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
