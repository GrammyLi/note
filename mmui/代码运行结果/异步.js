// 异步
// 结果: 2410 679 1
// 资料: https://www.iszy.cc/posts/promise-multi-then-catch-finally/
setTimeout(() => {
  console.log(1);
}, 0);
const promise = new Promise((resolve, reject) => {
  console.log(2);
  reject(3); // 不会中断执行，还是会执行下面的4，除非 return reject(3)
  console.log(4);
});

promise
  .then(() => console.log(5))
  .catch(() => console.log(6)) // catch返回一个新的promise，并且 catch 中没有再抛错，所以返回的promise状态变成fulfilled，会被后面的then成功回调执行
  .then(() => console.log(7))
  .catch(() => console.log(8)) // 前面的catch和then都没有抛错，所以不会执行
  .then(() => console.log(9));
console.log(10);
