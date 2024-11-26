const twoSum = (nums, target) => {
  const map = new Map(); // 用于存储已遍历元素的值和索引

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // 计算补数

    // 如果补数在 map 中，返回当前索引和补数的索引
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // 如果没有找到补数，记录当前数值及其索引
    map.set(nums[i], i);
  }

  return []; // 如果没有找到符合条件的两个数，返回空数组
};

// 测试用例
const test_twoSum = () => {
  console.log(twoSum([2, 7, 11, 15], 9)); // 输出: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // 输出: [1, 2]
  console.log(twoSum([3, 3], 6)); // 输出: [0, 1]
  console.log(twoSum([1, 2, 3, 4], 7)); // 输出: [2, 3]
};

// 执行测试
test_twoSum();
