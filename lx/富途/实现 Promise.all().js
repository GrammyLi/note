const customPromiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          results[i] = res;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
    if (promises.length === 0) {
      resolve(results);
    }
  });
};

const customPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    }
    if (promises.length === 0) {
      // 如果传入空数组，保持pending状态
    }
  });
};
