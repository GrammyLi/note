// 题目描述：
// 基于Promise实现一个task queue，其中task可以链式调用，上一个任务执行完毕才执行下一个。
// 要求：

// task是一个用于存储异步任务的函数，可以链式调用，保证上一个任务执行完毕后才能执行下一个。
// run方法用于循环执行异步任务。

// 作者：eason_fan
// 链接：https://juejin.cn/post/7482618773510455348
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

class TaskQueue {
  constructor() {
    this.tasks = [];
    this.currentPromise = Promise.resolve();
  }

  task(wait, callback) {
    this.tasks.push({ wait, callback });
    return this;
  }

  run() {
    this.tasks.forEach((task) => {
      this.currentPromise = this.currentPromise.then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              const result = task.callback();
              if (result instanceof Promise) {
                result.then(resolve).catch(reject);
              } else {
                resolve(result);
              }
            } catch (error) {
              reject(error);
            }
          }, task.wait || 0);
        });
      });
    });
    return this.currentPromise;
  }
}
