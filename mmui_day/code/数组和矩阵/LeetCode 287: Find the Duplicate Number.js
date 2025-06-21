// 问题描述：
// 给定一个长度为 n 的数组，数组中的所有数字都在 0 到 n-1 的范围内。
// 数组中可能有多个数字重复，但不知道有几个数字是重复的，
// 也不知道每个数字重复了多少次。要求找出任意一个重复的数字。

// 思路：
// 这段代码是一个在 LeetCode 287 题 "Find the Duplicate Number"（找重复数字）上的解法，采用了 原地交换法。这个方法巧妙地利用了数组的索引作为位置，尝试通过交换数组中的元素来找到重复的数字。
// 代码解释：
// 数组的索引和元素的关系：

// 数组 nums 中的元素值都在 1 到 n 之间，其中 n 是数组的长度减一。
// 如果数组中没有重复数字，那么每个元素都应该位于它自己的索引位置上。例如，nums[i] = i。
// 如果有重复数字，某个数字会被交换到一个不应该出现的地方，从而形成了循环或重复。
// 思路：

// 我们遍历数组，对于每个元素，试图把它交换到正确的位置（即把 nums[i] 放到索引 nums[i] 的位置）。
// 在交换之前，先检查当前元素是否已经在正确的位置。如果 nums[i] != i，说明它不在正确的位置，尝试交换。
// 如果交换后，发现当前位置的元素等于交换后的元素，说明我们找到了重复的数字
const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message); // 输出失败信息
  } else {
    log("||| 测试成功"); // 输出成功信息
  }
};

// 查找重复数字函数
const findDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    // 如果 nums[i] 不在正确的位置（即 nums[i] !== i），就交换
    while (nums[i] !== i) {
      // 如果 nums[i] 和 nums[nums[i]] 相等，说明找到了重复数字
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      // 交换 nums[i] 和 nums[nums[i]] 的位置
      [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]]; // 使用解构赋值交换
    }
  }
  return -1; // 如果没有重复数字，返回 -1（根据题目假设总会有重复数字）
};

// 测试用例
const test_findDuplicate = () => {
  ensure(findDuplicate([2, 3, 1, 0, 2, 5, 3]) === 2, "测试用例 1: 2 是重复的"); // 重复数字 2
  ensure(
    findDuplicate([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]) === 9,
    "测试用例 2: 9 是重复的"
  ); // 重复数字 9
  ensure(findDuplicate([1, 3, 4, 2, 2]) === 2, "测试用例 3: 2 是重复的"); // 重复数字 2
  ensure(findDuplicate([5, 4, 6, 3, 1, 0, 5]) === 5, "测试用例 4: 5 是重复的"); // 重复数字 5
  ensure(findDuplicate([0, 1, 2, 3, 4]) === -1, "测试用例 5: 无重复"); // 没有重复数字

  log("*** findDuplicate 测试成功");
};

test_findDuplicate();
