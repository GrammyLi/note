const flat = (arr, depth = 1) => {
  if (depth > 0) {
    // 深度大于0时，遍历数组
    return arr.reduce((acc, val) => {
      // 如果是数组，递归调用 flat，深度减1
      const value = Array.isArray(val) ? flat(val, depth - 1) : val;
      // 合并结果
      return acc.concat(value);
    }, []); // 初始值为空数组
  } else {
    // 如果深度为0，直接返回浅拷贝
    return arr.slice();
  }
};

let testArr = [1, [2, 3], [4, [5]]];
let res = flat(testArr, 2);
console.log(res);

// 入参：arr， depth 拍平到只有一层
