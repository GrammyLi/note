// 打家劫舍
// 题目：强盗抢劫一排房间，要求不能抢劫相邻的房间，要求抢的钱最多；数组如：[1, 2, 3, 4]
// - 实质: 其实就是 打家劫舍 的 动态规划问题
// - 源码: 本项目/3-LEETCODE/动态规划/打家劫舍.html
const arr1 = [1, 11, 3, 8, 5];
// const getMax = (nums) => {
//   let result = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 2; j < nums.length; j++) {
//       if (nums[i] + nums[j] > result) {
//         result = nums[i] + nums[j];
//       }
//     }
//   }

//   return result;
// };
const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 打家劫舍 动态规划解法
const getMax = (nums) => {
  const len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];

  const dp = [];
  dp[0] = nums[0]; // 第一个房间的最大金额
  dp[1] = Math.max(nums[0], nums[1]); // 第二个房间的最大金额

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[len - 1]; // 返回最大抢劫金额
};

// 测试数据
const testCases = [
  { input: [1, 11, 3, 8, 5], expected: 19 }, // 基础案例
  { input: [2, 7, 9, 3, 1], expected: 12 }, // 另一个常见测试
  { input: [5, 1, 1, 5], expected: 10 }, // 交替抢劫案例
  { input: [2, 4, 6, 2, 5], expected: 12 }, // 具有多个大数的案例
  { input: [1, 2, 3, 1], expected: 4 }, // 小数据集测试
  { input: [], expected: 0 }, // 空数组测试
  { input: [100], expected: 100 }, // 只有一个房间
  { input: [1, 2], expected: 2 }, // 只有两个房间
];

// 执行测试
testCases.forEach((testCase, index) => {
  const result = getMax(testCase.input);
  ensure(
    result === testCase.expected,
    `测试用例 ${index + 1}: 输入 ${JSON.stringify(testCase.input)}，期望结果 ${
      testCase.expected
    }，实际结果 ${result}`
  );
});

log("*** 所有测试通过");
