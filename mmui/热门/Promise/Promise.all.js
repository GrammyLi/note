function PromiseAll(promiseArr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArr)) {
      return reject(new Error("arr"));
    }
    const res = [];
    let count = 0;
    for (let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i])
        .then((value) => {
          count++;
          res[i] = value;
          if (count === promiseArr.length) {
            resolve(res);
          }
        })
        .catch((e) => reject(e));
    }
  });
}

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p2");
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3");
  }, 3000);
});
const test = PromiseAll([p2, p1, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));

console.log(test);
