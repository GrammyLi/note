/*
题目描述：
给定两个二进制字符串，返回它们的和（也作为二进制字符串）。输入的字符串仅包含字符 '0' 或 '1'，且不含前导零。

Input: a = "1010", b = "1011"
Output: "10101"

模拟二进制加法：

从最低位（字符串的末尾）开始逐位加法。
如果两个对应位的和大于等于 2，说明产生进位，需要设置进位标记，并将当前位设置为和减去 2（即 sum % 2）。
如果不产生进位，直接将当前位设置为 sum。
每次加完之后，进位标志会传递到下一位。
*/

const addBinary = (a, b) => {
  let result = ""; // 用于存储最终的二进制和
  let carry = 0; // 进位标志
  let i = a.length - 1; // a 字符串从后向前遍历
  let j = b.length - 1; // b 字符串从后向前遍历

  // 遍历两个字符串，直到两个字符串都遍历完并且没有进位
  while (i >= 0 || j >= 0 || carry) {
    // 计算当前位的和
    const digitA = i >= 0 ? parseInt(a[i]) : 0; // 如果 i < 0, 则为 0
    const digitB = j >= 0 ? parseInt(b[j]) : 0; // 如果 j < 0, 则为 0

    const sum = digitA + digitB + carry;

    // 当前位的结果是 sum 的个位
    result = (sum % 2) + result;

    // 更新进位
    carry = Math.floor(sum / 2);

    // 移动到下一位
    i--;
    j--;
  }

  return result;
};

// 测试用例
const test_addBinary = () => {
  console.log(addBinary("1010", "1011")); // 输出: "10101"
  console.log(addBinary("11", "1")); // 输出: "100"
  console.log(addBinary("1010101", "10101")); // 输出: "1101000"
  console.log(addBinary("0", "0")); // 输出: "0"
};

// 执行测试
test_addBinary();
