// 题目描述： 实现一个函数，将一个整数翻转（即数字的顺序颠倒），并返回翻转后的整数。

function reverseInteger(num) {
  let reversed = 0;
  const isNegative = num < 0;
  num = Math.abs(num);

  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (isNegative) {
    reversed = -reversed;
  }

  // 检查是否溢出 32 位整数范围
  if (reversed < -Math.pow(2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return reversed;
}

// 示例
console.log(reverseInteger(123)); // 输出 321
console.log(reverseInteger(-123)); // 输出 -321
console.log(reverseInteger(120)); // 输出 21
console.log(reverseInteger(1534236469)); // 输出 0（溢出）
