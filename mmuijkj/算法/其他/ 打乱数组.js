const shuffleArray1 = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

// 示例：
const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray1(arr)); // 输出打乱后的数组

const shuffleArray2 = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 随机索引
    // 使用解构赋值交换元素
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// 示例：
const arr2 = [1, 2, 3, 4, 5];
console.log(shuffleArray2(arr2)); // 输出打乱后的数组
