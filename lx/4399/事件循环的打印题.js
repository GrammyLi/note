console.log("script start");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve()
    .then(() => {
      console.log("promise 1 in setTimeout 1");
      throw new Error("Error in promise 1 in setTimeout 1");
    })
    .catch(() => {
      console.log("catch error in setTimeout 1");
    })
    .finally(() => {
      console.log("finally in setTimeout 1");
    });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise 1");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("setTimeout 2 in promise 1");
        resolve("resolved value from setTimeout 2");
      }, 0);
    })
      .then((value) => {
        console.log(value);
        throw new Error("Error in promise 2");
      })
      .catch(() => {
        console.log("catch error in promise 2");
      })
      .finally(() => {
        console.log("finally in promise 2");
      });
  })
  .then(() => {
    console.log("promise 3");
  })
  .catch(() => {
    console.log("catch error in promise 3");
  })
  .finally(() => {
    console.log("finally in promise 3");
  });

setTimeout(() => {
  console.log("setTimeout 3");
}, 0);

console.log("script end");
