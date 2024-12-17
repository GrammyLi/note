function test() {
  console.log(1);
  setTimeout(function () {
    // timer1
    console.log(2);
  }, 1000);
}

test();

setTimeout(function () {
  // timer2
  console.log(3);
});

new Promise(function (resolve) {
  console.log(4);
  setTimeout(function () {
    // timer3
    console.log(5);
  }, 100);
  resolve();
}).then(function () {
  setTimeout(function () {
    // timer4
    console.log(6);
  }, 0);
  console.log(7);
});

console.log(8);

// 1, 4, 8 (同步任务), 7（微任务）,
// 3（宏任务，它的时间虽然是0，但是它在最前面，js 是从上往下一行一行执行）, 6（宏任务）, 5（宏任务）, 2（宏任务）
