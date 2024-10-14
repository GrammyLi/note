function retry(promiseFn, times, interval) {
  return new Promise((resolve, reject) => {
    let count = 0;
    function run() {
      promiseFn()
        .then(resolve)
        .catch((error) => {
          count++;
          if (count === times) {
            reject(error);
          } else {
            setTimeout(run, interval);
          }
        });
    }
    run();
  });
}
