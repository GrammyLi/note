async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}

async function async2() {
  console.log(3);
}

console.log(4);

setTimeout(() => {
  console.log(5);
}, 0);

async1();

new Promise((resolve, reject) => {
  console.log(6);
  resolve();
}).then(() => {
  console.log(7);
});

console.log(8);

// 4, 1, 3, 6, 8(同步任务), 2（微任务）, 7（微任务）, 5（宏任务）

// 里面逻辑
// async function async1() {
//   console.log(1);
//   await async2();
//   console.log(2);
// }
