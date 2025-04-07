function shuffleArray(array) {
  const newArray = array.slice(); // 创建数组的副本以避免修改原数组
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 生成0到i之间的随机索引
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // 交换元素
  }
  return newArray;
}

// 示例
const myArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(myArray);
console.log(shuffledArray); // 输出可能是 [3, 2, 1, 5, 4]，每次运行结果可能不同
