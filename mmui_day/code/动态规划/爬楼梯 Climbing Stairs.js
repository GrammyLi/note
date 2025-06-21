// 爬楼梯 Climbing Stairs.
// - 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//     - 输入： 1，输出： 1
//     - 输入： 2，输出： 2
//     - 输入： 3，输出： 3
//     - 输入： 4，输出： 5
//     - 输入： 5，输出： 8

// 假设你在第 n 阶楼梯时，可以从第 n-1 阶跳一步，或者从第 n-2 阶跳两步。
// 所以，爬到第 n 阶的方式可以通过爬到第 n-1 阶和第 n-2 阶的方式之和来计算。
// dp[n] = dp[n-1] + dp[n-2]

const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 爬楼梯 Climbing Stairs
const climbStairs = (n) => {
  if (n <= 2) return n; // 如果 n 为 1 或 2，直接返回 n

  let dp1 = 1; // dp[1]：爬到第一阶的方法数
  let dp2 = 2; // dp[2]：爬到第二阶的方法数

  // 从第三阶开始计算
  for (let i = 3; i <= n; i++) {
    let dp = dp1 + dp2; // 当前阶梯的方法数等于前两阶方法数之和
    dp1 = dp2; // 更新 dp1 为 dp2
    dp2 = dp; // 更新 dp2 为当前的 dp
  }

  return dp2; // 最后 dp2 保存的是 dp[n] 的值
};

// 测试用例
const test_climbStairs = () => {
  ensure(climbStairs(1) === 1, "测试用例 1"); // 1
  ensure(climbStairs(2) === 2, "测试用例 2"); // 2
  ensure(climbStairs(3) === 3, "测试用例 3"); // 3
  ensure(climbStairs(4) === 5, "测试用例 4"); // 5
  ensure(climbStairs(5) === 8, "测试用例 5"); // 8
  ensure(climbStairs(6) === 13, "测试用例 6"); // 13
  ensure(climbStairs(7) === 21, "测试用例 7"); // 21
  ensure(climbStairs(8) === 34, "测试用例 8"); // 34
  ensure(climbStairs(9) === 55, "测试用例 9"); // 55
  ensure(climbStairs(10) === 89, "测试用例 10"); // 89

  log("*** climbStairs 测试成功");
};

test_climbStairs();
