class Scheduler {
  constructor(maxConcurrency) {
    this.maxConcurrency = maxConcurrency; // 最大并发数
    this.taskQueue = []; // 任务队列
    this.runningCount = 0; // 当前正在运行的任务数
  }

  // 添加任务到队列
  addTask(task) {
    this.taskQueue.push(task);
    this.run(); // 尝试运行任务
  }

  // 尝试执行任务
  async run() {
    // 如果当前运行中的任务数小于最大并发数，并且队列有任务，就执行任务
    if (this.runningCount < this.maxConcurrency && this.taskQueue.length > 0) {
      const task = this.taskQueue.shift(); // 从队列中取出一个任务
      this.runningCount++; // 增加当前运行中的任务数
      try {
        await task(); // 执行任务
      } catch (err) {
        console.error(err);
      } finally {
        this.runningCount--; // 任务完成，减少正在运行的任务数
        this.run(); // 继续尝试执行下一个任务
      }
    }
  }
}

// 创建一个调度器，最大并发数为 3
const scheduler = new Scheduler(3);

// 模拟一个异步任务
function createTask(id, delay) {
  return () => {
    return new Promise((resolve) => {
      console.log(`Task ${id} is starting.`);
      setTimeout(() => {
        console.log(`Task ${id} is done.`);
        resolve();
      }, delay);
    });
  };
}

// 添加任务
for (let i = 1; i <= 10; i++) {
  scheduler.addTask(createTask(i, Math.random() * 2000 + 1000)); // 每个任务有不同的延时
}
