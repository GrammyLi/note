// LeetCode 题目 43：字符串相乘，
// 要求实现一个函数，接受两个表示非负整数的字符串 num1 和 num2，并返回它们的乘积，结果也是一个字符串。

// num1 = "123", num2 = "456"
// "56088"

/**

  123
x 456
------
  738    <- 123 * 6
 6150    <- 123 * 5, 需要加上一个0
49200    <- 123 * 4, 需要加上两个0
------
56088

 */

// 假设 num1 = "123" 和 num2 = "456"：

// 初始化：result = [0, 0, 0, 0, 0, 0]（大小为 3 + 3）

// 乘法计算：

// i = 2, j = 2（对应位 3 * 6 = 18）：result[5] = 8，result[4] = 1（进位）
// i = 2, j = 1（对应位 3 * 5 = 15）：result[4] = 16，result[3] = 1（进位）
// i = 2, j = 0（对应位 3 * 4 = 12）：result[3] = 13，result[2] = 1（进位）
// ...
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  // 如果有任何一个数为 "0"，则结果为 "0"
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  let m = num1.length;
  let n = num2.length;
  let result = new Array(m + n).fill(0); // 初始化一个长度为 m + n 的数组，用于存储每一位的乘积结果

  // 从 num1 和 num2 逐位计算
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 计算当前位的乘积
      let mul = (num1[i] - "0") * (num2[j] - "0");
      console.log("mul", mul);
      // 当前结果数组的位置 = mul + result当前位置的已有值
      let sum = mul + result[i + j + 1]; // 计算当前位置的总和（包括进位）
      result[i + j + 1] = sum % 10; // 保存当前位的结果
      result[i + j] += Math.floor(sum / 10); // 处理进位，向前传递
    }
  }

  // 最终结果是一个数组，需要转换为字符串，去掉前导零
  let res = result.join("");
  return res[0] === "0" ? res.slice(1) : res; // 去掉多余的前导零
};

// console.log(multiply("2", "3")); // 输出 "6"
console.log(multiply("123", "456")); // 输出 "56088"
// console.log(multiply("0", "456")); // 输出 "0"
// console.log(multiply("123", "0")); // 输出 "0"
