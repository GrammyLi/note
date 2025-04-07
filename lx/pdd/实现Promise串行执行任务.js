// 实现Promise串行执行，并在失败时重试指定次数的函数。
// 如果所有重试都失败，则整个序列会停止执行。

function promiseSeries(tasks, retryTimes) {
  // 内部函数，用于执行单个任务，并重试指定次数
  function runTask(task, retryCount) {
    return new Promise((resolve, reject) => {
      task()
        .then(resolve)
        .catch((error) => {
          if (retryCount > 0) {
            console.log(
              `任务失败，正在重试... 剩余重试次数：${retryCount - 1}`
            );
            runTask(task, retryCount - 1)
              .then(resolve)
              .catch(reject);
          } else {
            reject(error);
          }
        });
    });
  }
  // 串行执行任务
  let result = Promise.resolve();
  tasks.forEach((task) => {
    result = result.then(() => runTask(task, retryTimes));
  });
  return result;
}
// 示例使用
const tasks = [
  () =>
    new Promise((resolve, reject) => setTimeout(resolve, 1000, "任务1完成")),
  () => new Promise((resolve, reject) => setTimeout(reject, 1000, "任务2失败")),
  () =>
    new Promise((resolve, reject) => setTimeout(resolve, 1000, "任务3完成")),
];
promiseSeries(tasks, 2)
  .then(() => console.log("所有任务完成"))
  .catch((error) => console.log(`执行失败：${error}`));
