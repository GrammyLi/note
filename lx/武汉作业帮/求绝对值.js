// 三面是给定m个数组，每个数组按照升序排列，现在要求从两个不同的数组取两个整数，求绝对值。要求绝对值最大

// 输入：[[1,2,3],[4,5],[1,2,3]],
// 输出：4
// 解释：取1和5，求绝对值

function maxDistance(arrays) {
  // 初始化变量
  let max1 = -Infinity,
    min1 = Infinity;
  let maxIndex = -1,
    minIndex = -1;
  let max2 = -Infinity,
    min2 = Infinity;

  // 遍历所有数组
  for (let i = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    const currentMax = arr[arr.length - 1]; // 当前数组的最大值
    const currentMin = arr[0]; // 当前数组的最小值

    // 更新最大值及其索引
    if (currentMax > max1) {
      max2 = max1;
      max1 = currentMax;
      maxIndex = i;
    } else if (currentMax > max2) {
      max2 = currentMax;
    }

    // 更新最小值及其索引
    if (currentMin < min1) {
      min2 = min1;
      min1 = currentMin;
      minIndex = i;
    } else if (currentMin < min2) {
      min2 = currentMin;
    }
  }

  // 判断最大值和最小值是否来自不同数组
  if (maxIndex !== minIndex) {
    return max1 - min1;
  } else {
    return Math.max(max1 - min2, max2 - min1);
  }
}

// 示例1
const arrays1 = [
  [1, 2, 3],
  [4, 5],
  [1, 2, 3],
];
console.log(maxDistance(arrays1)); // 输出4

// 示例2
const arrays2 = [[1], [1]];
console.log(maxDistance(arrays2)); // 输出0
