// 给定一个数组 prices，其中 prices[i] 表示某股票第 i 天的价格。假设你最多可以完成两笔交易（即买入和卖出一次为一笔交易），设计一个算法来计算你能获得的最大利润。

// 这道题可以通过动态规划来解决。我们需要记录以下四个状态：

// buy1：第一次买入后的最大利润。
// sell1：第一次卖出后的最大利润。
// buy2：第二次买入后的最大利润。
// sell2：第二次卖出后的最大利润。

// 具体步骤如下：

// 初始化四个状态变量。
// 遍历每一天的价格，更新四个状态变量。
// 最后返回 sell2，即两次交易后的最大利润。

// 作者：eason_fan
// 链接：https://juejin.cn/post/7487913431667179561
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
function maxProfit(prices) {
  if (prices.length === 0) return 0;

  // 初始化状态变量
  let buy1 = -prices[0];
  let sell1 = 0;
  let buy2 = -prices[0];
  let sell2 = 0;

  for (let i = 1; i < prices.length; i++) {
    // 更新第一次买入和卖出的状态
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);

    // 更新第二次买入和卖出的状态
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return sell2;
}

// 示例
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 输出 6
