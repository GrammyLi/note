// 1
// Question: Implement the 'promisify' function.
function delayToEcho(msg, cb) {
  setTimeout(() => {
    const err = Date.now() % 2 === 0 ? null : new Error();
    cb(err, msg);
  }, 3000);
}

// 正常调用
delayToEcho("msg", (err, msg) => {});

// TIPS
// The place to write code.
// 请把这个函数实现，能够让以下代码能够成功运行
function promisify(fn) {
  return function (...rest) {
    return new Promise((resolve, reject) => {
      fn(...rest, (err, msg) => {
        if (err) reject(err);
        else resolve(msg);
      });
    });
  };
}

promisify(delayToEcho)("msg")
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
