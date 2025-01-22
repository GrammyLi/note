const s = "3[a]2[b1[c]]ef";
function change(str) {
  let stack = [];
  let currentStr = ""; // 目前累积到的字符串
  let currentNum = 0; // 当前项重复次数
  for (let s of str) {
    if (!isNaN(s)) {
      currentNum = currentNum * 10 + s;
    } else if (s === "[") {
      // 遇到[,先保存以前累积的字符串,和下一次的重复次数
      stack.push(currentStr);
      stack.push(currentNum);
      currentNum = 0;
      currentStr = "";
    } else if (s === "]") {
      // 遇到],弹出以前累积的字符串和,下一次重复次数,拼接
      const prevNum = stack.pop();
      const prevStr = stack.pop();
      currentStr = prevStr + currentStr.repeat(prevNum);
    } else {
      currentStr += s;
    }
  }
  return currentStr;
}

// console.log(change(s));

function decodeString(s) {
  // 初始化栈，用于存储括号层级信息
  const stack = [];
  // 初始化当前字符串，用于存储当前处理的字符串部分
  let currentString = "";
  // 初始化当前数字，用于存储当前的重复次数
  let currentNumber = 0;

  // 遍历字符串中的每一个字符
  for (const char of s) {
    if (char === "[") {
      // 如果遇到 '['，将当前的 currentString 和 currentNumber 压入栈
      stack.push({ string: currentString, number: currentNumber });
      // 重置 currentString 和 currentNumber，以便处理新的子表达式
      currentString = "";
      currentNumber = 0;
    } else if (char === "]") {
      // 如果遇到 ']'，从栈中弹出上一层的 string 和 number
      const { string, number } = stack.pop();
      // 将当前字符串重复指定次数，并拼接到上一层的字符串
      currentString = string + currentString.repeat(number);
    } else if (/\d/.test(char)) {
      // char >= '0' && char <= '9'
      // 如果遇到数字，累加数字，处理多位数
      currentNumber = currentNumber * 10 + parseInt(char, 10);
    } else {
      // 如果遇到字母，直接将其添加到 currentString
      currentString += char;
    }
  }

  // 返回最终解码后的字符串
  return currentString;
}

// 示例用法
const input = "3[a]2[b1[c]]ef";
const output = decodeString(input);
console.log(output); // 输出 "aaabcbcef"
