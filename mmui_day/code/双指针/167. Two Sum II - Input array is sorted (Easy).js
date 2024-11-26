// 双指针主要用于遍历数组，两个指针指向不同的元素，从而协同完成任务。

const twoSum = (numbers, target) => {
  if (!!numbers.length) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
      let sum = numbers[i] + numbers[j];
      if (sum === target) {
        return [i + 1, j + 1];
      } else if (sum < target) {
        i++;
      } else {
        j--;
      }
    }
  }
  return null;
};

// https://cyc2018.xyz/%E7%AE%97%E6%B3%95/Leetcode%20%E9%A2%98%E8%A7%A3/Leetcode%20%E9%A2%98%E8%A7%A3%20-%20%E5%8F%8C%E6%8C%87%E9%92%88.html#_1-%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84-two-sum
// 这里缺少了 测试用例
