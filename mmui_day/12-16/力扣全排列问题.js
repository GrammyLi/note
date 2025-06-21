// 定义函数用于生成给定数组的全排列
function permute(nums) {
  const result = []; // 用于存储最终所有的全排列结果
  const used = new Array(nums.length).fill(false); // 创建一个布尔值数组，用于标记nums中的每个元素是否已被使用，初始都为false表示都未使用

  // 定义回溯函数，用于通过深度优先搜索来构建全排列
  const backtrack = (path) => {
    // 当当前构建的排列path的长度等于输入数组nums的长度时，说明已经得到了一种全排列
    if (path.length === nums.length) {
      result.push([...path]); // 将当前排列path的副本（浅拷贝）添加到结果数组result中，避免后续回溯修改影响已添加的结果
      return;
    }

    // 遍历输入数组nums的每一个元素
    for (let i = 0; i < nums.length; i++) {
      // 如果当前元素未被使用
      if (!used[i]) {
        used[i] = true; // 将该元素标记为已使用
        path.push(nums[i]); // 把当前元素添加到当前正在构建的排列path中

        // 递归调用backtrack函数，继续构建排列，进入下一层探索
        backtrack(path);

        // 回溯操作，将刚才添加到path中的元素移除，恢复到添加该元素之前的状态，以便尝试其他可能的排列
        path.pop();

        used[i] = false; // 将该元素的使用标记重新设为false，后续循环还可以再次选择该元素构建不同排列
      }
    }
  };

  backtrack([]); // 初始调用回溯函数，传入空数组作为起始的排列情况，开始全排列的探索
  return result; // 返回最终生成的所有全排列结果
}

// 以下是测试案例
const nums = [1, 2, 3]; // 定义测试用的输入数组
const permutations = permute(nums); // 调用permute函数生成全排列
console.log(permutations); // 输出全排列结果，预期输出为[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
