const debounce = (fn, delay) => {
  let time;
  return function () {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
};


