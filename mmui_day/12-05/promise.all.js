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
