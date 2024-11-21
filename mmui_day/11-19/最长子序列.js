// 面试的时候 在dp数组初始化时想当然均赋值为0 导致后面输出结果有问题 不过面试官很好
// 提醒了下“dp数组设置的含义” 后面就改正过来了

function longer(nums) {
  if (nums.length === 0) return [];

  // 初始化dp数组，长度与nums相同，默认值为1（因为每个元素本身都可以看作是一个长度为1的递增子序列）
  const dp = new Array(nums.length).fill(1);
  console.log("dp", JSON.stringify(dp));
  // 用于记录最长递增子序列的构造过程
  const prev = new Array(nums.length).fill(-1);
  console.log("prev", JSON.stringify(prev));

  let maxLength = 1; // 最长递增子序列的长度
  let endIndex = 0; // 最长递增子序列的最后一个元素的索引

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // 如果当前元素大于前一个元素，并且以当前元素结尾的递增子序列长度比之前更长
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j; // 记录前一个元素的索引
      }
    }

    // 更新最长递增子序列的长度和最后一个元素的索引
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      endIndex = i;
    }
  }

  // 根据prev数组回溯构建最长递增子序列
  const lis = [];
  let k = endIndex;
  while (k !== -1) {
    lis.unshift(nums[k]); // 从后向前添加元素到lis数组中
    k = prev[k];
  }

  return lis;
}

// 示例用法
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lis = longer(nums);
console.log(lis); // 输出：[2, 3, 7, 101] 或者其他可能的递增子序列，只要它是最长的
