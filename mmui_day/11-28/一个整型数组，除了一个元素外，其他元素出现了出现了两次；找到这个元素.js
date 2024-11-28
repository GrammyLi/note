const getSingle = (nums) => {
  const map = {};

  for (let num of nums) {
    map[num] = (map[num] || 0) + 1; // 用 map 来计数
  }

  // 找出出现一次的元素
  for (let num in map) {
    if (map[num] === 1) {
      return num;
    }
  }
};

// 测试数据
const arr2 = [1, 3, 3, 2, 2];
const res2 = getSingle(arr2);
console.log("res2: ", res2); // 1
