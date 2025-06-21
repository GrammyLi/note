function combinationSum(candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b); // 对候选数字排序

  function backtrack(remain, combination, start) {
    if (remain === 0) {
      result.push(combination.join("")); // 找到满足条件的组合，添加到结果列表
      return;
    } else if (remain < 0) {
      return; // 不符合要求，回溯
    }
    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]); // 添加当前数字到组合
      backtrack(remain - candidates[i], combination, i); // 递归，继续找下一个数字，索引不变可重复使用当前数字
      combination.pop(); // 回溯，移除最后添加的数字，尝试其他可能
    }
  }

  backtrack(target, [], 0);
  return result;
}

let candidates = [2, 3, 5];
let target = 8;
console.log(combinationSum(candidates, target));

/*
一个数组，不包含重复数字，一个target，每个数字可以取无限次，按顺序找出所有target可能的组合
比如，数组是2 3 5，target是8
答案就是2222，233，35
*/
function func(arr, target) {
  let res = [],
    has = new Set();
  const dfs = (path, curSum) => {
    if (curSum >= target) {
      //终止条件
      if (curSum === target) {
        // res.push(path.slice())
        //res.push(path.slice().sort())
        //set对于数组不去重，所以收集字符串
        //收集结果
        has.add(path.slice().sort().join(""));
      }
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      //处理节点
      path.push(arr[i]);
      curSum += arr[i];
      dfs(path, curSum); //递归
      //回溯
      path.pop();
      curSum -= arr[i];
    }
  };
  dfs([], 0);

  // console.log(has)
  has.forEach((item) => res.push(item.split("").map(Number)));
  // console.log(res)
  return res;
}
console.log(func([2, 3, 5], 8));
