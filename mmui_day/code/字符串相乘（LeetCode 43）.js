// 题目描述：

// 给定两个非负整数 num1 和 num2，作为字符串返回它们的乘积。不能使用内建的大整数库，要求模拟乘法过程来进行实现。

// Input: num1 = "2", num2 = "3"
// Output: "6"

// Input: num1 = "123", num2 = "456"
// Output: "56088"

/**


   123
×  456
------
   738   <- 123 × 6
  6150    <- 123 × 5 (移动一位)
+ 49200   <- 123 × 4 (移动两位)
------
  56088

 * * */

const multiply = (num1, num2) => {
  const m = num1.length;
  const n = num2.length;

  // 如果任何一个数是 "0"，结果就是 "0"
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  // 结果的最大长度是 m + n
  const result = new Array(m + n).fill(0);

  // 从 num1 和 num2 的末尾开始，逐位相乘
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 计算 num1[i] 和 num2[j] 的乘积
      const mul = (num1[i] - "0") * (num2[j] - "0");
      const sum = mul + result[i + j + 1]; // 当前位的累加和

      // 更新当前位的值，并处理进位
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // 将结果数组转换成字符串，去掉前导零
  let res = "";
  for (let i = 0; i < result.length; i++) {
    if (!(res === "" && result[i] === 0)) {
      // 避免前导零
      res += result[i];
    }
  }

  return res;
};

// 测试用例
const test_multiply = () => {
  console.log(multiply("2", "3")); // 输出: "6"
  console.log(multiply("123", "456")); // 输出: "56088"
  console.log(multiply("0", "0")); // 输出: "0"
  console.log(multiply("9", "99")); // 输出: "891"
  console.log(multiply("123", "0")); // 输出: "0"
};

// 执行测试
test_multiply();
