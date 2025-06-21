// 问题描述：给定一个数组和一个窗口大小 k，找到每个窗口中的最大值。

function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = []; // 双端队列

  for (let i = 0; i < nums.length; i++) {
    // 移除不在窗口内的元素
    if (deque[0] < i - k + 1) {
      deque.shift();
    }

    // 移除小于当前值的元素
    while (nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // 记录窗口最大值
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// 示例
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // 输出：[3, 3, 5, 5, 6, 7]
