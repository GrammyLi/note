// 给定一个整数数组 nums，找出其中最长递增子序列的长度。

// 子序列：从原数组中删除一些元素（可以不删除任何元素），但不改变剩余元素的顺序，得到的序列叫做子序列。
// 递增子序列：子序列中的元素严格递增。
// 例如：

// 输入：[10, 9, 2, 5, 3, 7, 101, 18]
// 输出：4
// 解释：最长递增子序列是 [2, 3, 7, 101]，长度为 4

// 动态规划解法：

// 我们可以使用动态规划来优化这个问题，减少重复计算，时间复杂度从暴力解法的 O(2^n) 降到 O(n^2)。
// 状态定义：定义 dp[i] 为以 nums[i] 结尾的最长递增子序列的长度。
// 状态转移方程：对于每一个 nums[i]，我们遍历它前面的所有元素 nums[j]（j < i），如果 nums[j] < nums[i]，那么我们可以把 nums[i] 加入到以 nums[j] 结尾的子序列中。此时 dp[i] 可以通过 dp[j] + 1 来更新。
// 初始化：dp[i] = 1，因为每个元素至少可以是一个长度为 1 的递增子序列。
// 结果：我们最终返回 dp 数组中的最大值，即为最长递增子序列的长度。

// 最长递增子序列长度
const lengthOfLIS = (nums) => {
  if (nums.length === 0) return 0;

  // dp[i] 表示以 nums[i] 结尾的最长递增子序列的长度
  let dp = new Array(nums.length).fill(1);

  // 填充 dp 数组
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // 返回 dp 数组中的最大值
  return Math.max(...dp);
};

// 测试用例
const testLIS = () => {
  console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 输出: 4
  console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 输出: 4
  console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 输出: 1
  console.log(lengthOfLIS([1, 2, 3, 4, 5, 6, 7, 8])); // 输出: 8
};

testLIS();
