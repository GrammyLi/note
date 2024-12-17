console.log("script start"); // 1

setTimeout(function () {
  console.log("setTimeout"); // 5
}, 0);

new Promise((res, rej) => {
  console.log("promise"); //  2
  rej(); // 这里拒绝了啊
})
  .then(function () {
    console.log("promise1");
  })
  .catch(function () {
    return 1;
  })
  .then(function () {
    console.log("promise2"); // 4
  });

console.log("script end"); // 3
