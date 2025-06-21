/**
 * retry_Promise 函数
 *
 * 该函数用于执行一个异步操作，并在失败时进行重试，直到成功或者达到最大重试次数。
 *
 * @param {Function} fn - 必选参数，异步函数，必须返回一个 Promise。
 *                          该函数执行的操作会被重试直到成功或达到最大重试次数。
 * @param {Number} [retries=3] - 可选参数，最大重试次数，默认值为 3。
 * @param {Number} [delay=0] - 可选参数，每次重试之间的延迟时间，单位为毫秒，默认值为 0 毫秒。
 *
 * @returns {Promise} - 返回一个 Promise，执行成功时返回结果，重试失败后返回最后的错误。
 */
const retry_Promise = (fn, retries = 3, delay = 0) => {
  return new Promise((resolve, reject) => {
    /**
     * 尝试执行异步操作，并在失败时进行重试。
     *
     * @param {Number} retriesLeft - 剩余的重试次数。
     */
    const attempt = (retriesLeft) => {
      // 执行异步操作
      fn()
        .then(resolve) // 如果成功，直接返回结果
        .catch((error) => {
          if (retriesLeft <= 0) {
            // 如果没有剩余的重试次数，则返回错误
            reject(error);
          } else {
            // 如果还有重试次数，则等待一定时间后重试
            setTimeout(() => {
              attempt(retriesLeft - 1); // 递归调用尝试函数，减少剩余重试次数
            }, delay); // 每次重试之间的延迟
          }
        });
    };

    // 启动第一次尝试
    attempt(retries);
  });
};

// 模拟一个可能会失败的异步操作
function fetchData() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // 50%概率成功
    setTimeout(() => {
      if (success) {
        resolve("数据获取成功!");
      } else {
        reject("数据获取失败!");
      }
    }, 500);
  });
}

// 使用 retry_Promise 调用 fetchData
retry_Promise(fetchData, 3, 1000)
  .then((data) => {
    console.log(data); // 如果成功，会打印数据
  })
  .catch((error) => {
    console.log(error); // 如果所有重试都失败，会打印错误
  });
