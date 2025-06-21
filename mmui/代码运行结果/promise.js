// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// 2
// 异步升级
function testPromise() {
  return new Promise((resolve, reject) => {
    reject("失败！");
  })
    .then(
      (res) => {
        // 1. 不会执行，因为promise的状态是reject，只会被then的第二个参数回调捕获，后这.catch捕获
        // 2. 但是如何这里有then的第二个参数回调函数，则会执行，并且catch就不会执行了，因为被then的第二个失败的回调捕获了
        console.log("then 1:", res);
        return "then 1 return";
      }
      // (err) => console.log(222222, err)
    )
    .catch((err) => {
      // 1. catch 返回的是新的promise
      //    - 如果 catch 中没有抛错，返回的新的promise的状态就是 fulfilled
      //    - 如果 catch 有抛错，返回的新的promise的状态就是 rejected
      // throw new Error("catch中也出错了");
      console.log("catch 1:", err); // catch 1: 失败！
      return "catch 1 return";
    })
    .finally((res) => {
      console.log("finally 1", res); // finally 1 undefined，====== 注意：finally的回调是不接受任意参数的，值都是undefined ======
      return "finally 1 return";
    })
    .then((res) => {
      console.log("then 2:", res); // then 2: catch 1 return，====== 注意 res的值是 catch 的返回值，而不是 finally 的返回值 ======
      return "then 2 return";
    })
    .catch((err) => {
      // 没有错误不会执行
      console.log("catch 2:", err);
      return "catch 2 return";
    })
    .finally((res) => {
      console.log("finally 2", res); // finally 2 undefined，====== 注意：finally的回调是不接受任意参数的，值都是undefined ======
      return "finally 2 return";
    })
    .then((res) => {
      console.log("then 3:", res); // then 3: then 2 return, ====== 注意 res的值是 catch 的返回值，而不是 finally 的返回值 ======
      return "then 3 return";
    })
    .catch((err) => {
      // 不执行
      console.log("catch 3:", err);
      return "catch 3 return";
    })
    .finally((res) => {
      console.log("finally 3", res); // finally 3 undefined，====== 注意：finally的回调是不接受任意参数的，值都是undefined ======
      return "finally 3 return";
    });
}
testPromise();
