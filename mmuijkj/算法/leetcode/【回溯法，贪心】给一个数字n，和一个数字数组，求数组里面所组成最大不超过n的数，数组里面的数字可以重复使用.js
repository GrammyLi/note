// 回溯法的思路是通过穷举所有可能的数字组合情况，来找到最大且不超过 n 的那个数。
function maxNumberBacktracking(n, arr) {
  let max = -1;
  function backtrack(tempNum, start) {
    if (tempNum <= n) {
      max = Math.max(max, tempNum);
    }
    for (let i = start; i < arr.length; i++) {
      backtrack(tempNum * 10 + arr[i], i);
    }
  }
  backtrack(0, 0);
  return max;
}

// 示例用法
let n = 200;
let arr = [1, 2, 3];
console.log(maxNumberBacktracking(n, arr));

// 贪心算法的思路是尽可能从数组中选择较大的数字来组成尽可能大的数，但要保证最终组成的数不超过 n。
function maxNumberGreedy(n, arr) {
  arr.sort((a, b) => b - a);
  let result = 0;
  for (let num of arr) {
    while (result * 10 + num <= n) {
      result = result * 10 + num;
    }
  }
  return result;
}

// 示例用法
console.log(maxNumberGreedy(n, arr));
