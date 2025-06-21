function addBigNumbers(num1, num2) {
  // 将数字转换为数组，每个元素是一个数字位
  num1 = num1.split("").map(Number);
  num2 = num2.split("").map(Number);

  // 确保 num1 是较长的数组
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }

  // 初始化结果数组和进位
  let result = [];
  let carry = 0;

  // 从右到左逐位相加
  for (let i = 0; i < num1.length; i++) {
    let digit1 = num1[num1.length - 1 - i];
    let digit2 = i < num2.length ? num2[num2.length - 1 - i] : 0;

    let sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10); // 更新进位
    result.push(sum % 10); // 将当前位的结果存储到数组中
  }

  // 如果最后还有进位，加到结果中
  if (carry > 0) {
    result.push(carry);
  }

  // 将结果数组反转并转换为字符串
  return result.reverse().join("");
}

// 示例
console.log(addBigNumbers("12345678901234567890", "98765432109876543210")); // 输出：111111111011111111100

function addBigNumbers2(num1, num2) {
  // 将字符串转换为 BigInt 类型
  let a = BigInt(num1);
  let b = BigInt(num2);

  // 直接进行加法运算
  return (a + b).toString();
}

// 示例
console.log(addBigNumbers2("12345678901234567890", "98765432109876543210")); // 输出：111111111011111111100
