console.log("in");
Promise.resolve()
  .then(() => {
    console.log("promise out1");
    setTimeout(() => {
      console.log("settimeout in");
    });
    Promise.resolve()
      .then(() => {
        console.log("promise in1");
      })
      .then(() => {
        console.log("promise in2");
      });
  })
  .then(() => {
    console.log("promise out2");
  });
setTimeout(() => {
  console.log("settimeout out");
});
console.log("out");
// 执行结果：
// in
// out
// promise out1
// promise in1
// promise out2
// promise in2
// settimeout out
// settimeout in