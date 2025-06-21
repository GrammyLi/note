/**
 * 
LeetCode 1365 题目要求我们对数组中的每个元素，统计数组中比它小的所有数字的数目，并以数组形式返回结果。不能使用 sort 和 filter，所以我们需要用不同的算法来解决这个问题。

题目描述：
给定一个数组 nums，对于其中每个元素 nums[i]，我们需要统计数组中有多少个数字比它小。最后返回一个数组 answer，其中 answer[i] 是数组中小于 nums[i] 的数字的个数。
 */

const smallerNumbersThanCurrent1 = (nums) => {
  const result = [];

  // 遍历 nums 数组
  for (let i = 0; i < nums.length; i++) {
    let count = 0;

    // 对每个元素进行比较，统计比它小的元素个数
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
};

// 测试用例
const test_smallerNumbersThanCurrent1 = () => {
  console.log(smallerNumbersThanCurrent1([8, 1, 2, 2, 3])); // 输出 [4, 0, 1, 1, 3]
  console.log(smallerNumbersThanCurrent1([6, 5, 4, 8])); // 输出 [2, 1, 0, 3]
  console.log(smallerNumbersThanCurrent1([7, 7, 7, 7])); // 输出 [0, 0, 0, 0]
  console.log(smallerNumbersThanCurrent1([1, 2, 3, 4])); // 输出 [0, 1, 2, 3]
};

test_smallerNumbersThanCurrent1();

const log = console.log.bind(console);

const ensure = function (condition, message) {
  // 在条件不成立的时候, 输出 message
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 1365. 有多少小于当前数字的数字
const smallerNumbersThanCurrent = (nums) => {
  // 创建一个新的数组，保存每个元素和它的原始索引
  const sortedNums = [...nums].sort((a, b) => a - b);
  const map = new Map();

  // 遍历排序后的数组，计算每个数字小于它的个数
  for (let i = 0; i < sortedNums.length; i++) {
    // 只有第一次遇到一个数字时，我们才将它在排序数组中的位置保存到 map 中
    if (!map.has(sortedNums[i])) {
      map.set(sortedNums[i], i);
    }
  }

  // 根据哈希表映射返回每个元素的结果
  return nums.map((num) => map.get(num));
};

// 测试用例
const test_smallerNumbersThanCurrent = () => {
  // 测试用例 1
  ensure(
    JSON.stringify(smallerNumbersThanCurrent([8, 1, 2, 2, 3])) ===
      JSON.stringify([4, 0, 1, 1, 3]),
    "smallerNumbersThanCurrent [8, 1, 2, 2, 3]"
  );

  // 测试用例 2
  ensure(
    JSON.stringify(smallerNumbersThanCurrent([6, 5, 4, 8])) ===
      JSON.stringify([2, 1, 0, 3]),
    "smallerNumbersThanCurrent [6, 5, 4, 8]"
  );

  // 测试用例 3
  ensure(
    JSON.stringify(smallerNumbersThanCurrent([7, 7, 7, 7])) ===
      JSON.stringify([0, 0, 0, 0]),
    "smallerNumbersThanCurrent [7, 7, 7, 7]"
  );

  // 测试用例 4
  ensure(
    JSON.stringify(smallerNumbersThanCurrent([1, 2, 3, 4])) ===
      JSON.stringify([0, 1, 2, 3]),
    "smallerNumbersThanCurrent [1, 2, 3, 4]"
  );

  log("*** smallerNumbersThanCurrent 测试成功");
};

test_smallerNumbersThanCurrent();

// 方法1
// - 思路: 先拷贝数组，升序排序，遍历原数组当前元素在有序数组的index的值，就是比该元素小的元素个数
// - 注意点:
//    - 1. arr.indexOf(parameter) 返回的是 ( 参数元素parameter ) 在数组中 ( 第一次出现的位置 )
const lessLen = (arr) => {
  const copy = [...arr].sort((a, b) => a - b); // 升序拷贝  [1, 2, 2, 3, 8]
  return arr.map((value) => copy.indexOf(value));
};
const lessLenArr = lessLen([8, 1, 2, 2, 3]);
console.log("lessLenArr: ", lessLenArr);

// 方法2 - O(n^2)
const lessLen1 = (arr) => {
  const len = arr.length;
  const res = new Array(len).fill(0); // 初始值是 [0,0,0,0,0]
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // 注意j也必须是从0开始比较，因为前面的值也可能比当前的值小
      if (arr[i] > arr[j]) {
        res[i]++;
      }
    }
  }
  return res;
};
const lessLenArr1 = lessLen1([8, 1, 2, 2, 3]);
console.log("lessLenArr1: ", lessLenArr1);

// 方法3
const lessLen2 = (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        num++;
      }
    }
    res.push(num);
  }
  return res;
};
const lessLenArr2 = lessLen2([8, 1, 2, 2, 3]);
console.log("lessLenArr2: ", lessLenArr2);
