function arrayDepth(arr) {
  //   if (Array.isArray(arr)) {
  //     // 如果是数组，递归计算每个元素的深度，取最大值并加 1
  //     return 1 + Math.max(0, ...arr.map(arrayDepth));
  //   } else {
  //     // 如果不是数组，返回 0
  //     return 0;
  //   }

  return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(arrayDepth)) : 0;
}

// 示例
const arr = [1, [2, [3, 4], 5], [6, 7]];
console.log("数组的深度是:", arrayDepth(arr));
