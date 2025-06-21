// 异步并发调度器
// 问题描述： 实现一个调度器，控制并发的任务数量，所有任务按照顺序执行。

class Scheduler {
  constructor(limit) {
    this.limit = limit; // 最大并发数
    this.queue = []; // 等待执行的任务队列
    this.running = 0; // 当前运行的任务数
  }

  add(task) {
    return new Promise((resolve) => {
      const runTask = () => {
        this.running++;
        task().then((result) => {
          resolve(result);
          this.running--;
          if (this.queue.length > 0) {
            this.queue.shift()(); // 执行下一个任务
          }
        });
      };

      if (this.running < this.limit) {
        runTask();
      } else {
        this.queue.push(runTask);
      }
    });
  }
}

// 示例任务
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

const scheduler = new Scheduler(2);

const addTask = (time, value) => {
  scheduler.add(() =>
    delay(time).then(() => {
      console.log(value);
      return value;
    })
  );
};

// 示例：添加任务
addTask(1000, "Task 1");
addTask(500, "Task 2");
addTask(300, "Task 3");
addTask(400, "Task 4");

// 输出顺序：
// Task 1
// Task 2
// Task 3
// Task 4
