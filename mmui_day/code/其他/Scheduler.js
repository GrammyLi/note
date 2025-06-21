class Scheduler {
  constructor(maxConcurrency) {
    this.maxConcurrency = maxConcurrency; // 最大并发数
    this.tasks = [];
    this.runningCount = 0;
  }

  // 添加任务到队列
  addTask(task) {
    this.tasks.push(task);
    this.run();
  }

  // 尝试执行任务
  async run() {
    if (this.tasks.length && this.runningCount < this.maxConcurrency) {
      let task = this.tasks.pop();
      this.runningCount++;
      try {
        await task();
      } catch (err) {
        console.log(err);
      } finally {
        this.runningCount--;
        this.run();
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
