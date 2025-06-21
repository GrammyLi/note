const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function MyPromise(func) {
  let state = PENDING;
  let value = null;
  let resolveCallbacks = [];
  let rejectCallbacks = [];

  this.then = function (onFulfilled, onRejected) {
    return new MyPromise((nextResolve, nextReject) => {
      function handleFulfilled(val) {
        try {
          const result = onFulfilled(val);
          nextResolve(result);
        } catch (error) {
          nextReject(error);
        }
      }
      function handleRejected(val) {
        try {
          const result = onRejected(val);
          nextReject(result);
        } catch (error) {
          nextReject(error);
        }
      }
      if (state === PENDING) {
        resolveCallbacks.push(handleFulfilled);
        rejectCallbacks.push(handleRejected);
      } else if (state === FULFILLED) {
        handleFulfilled(value);
      } else if (state === REJECTED) {
        handleRejected(value);
      }
    });
  };

  this.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  function resolve(val) {
    if (state !== PENDING) {
      return;
    }
    state = FULFILLED;
    value = val;
    resolveCallbacks.forEach((callback) => callback(value));
  }

  function reject(val) {
    if (state !== PENDING) {
      return;
    }
    state = REJECTED;
    value = val;
    rejectCallbacks.forEach((callback) => callback(value));
  }

  try {
    func(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
