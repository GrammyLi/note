const compose = (...fns) =>
  // 注意 f、g 的位置，如果实现从左到右计算，则置换顺序
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );
