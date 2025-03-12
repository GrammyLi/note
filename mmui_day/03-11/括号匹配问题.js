function isValid(s) {
  // 定义一个栈来存储左括号
  const stack = [];
  // 定义一个对象，用于映射右括号和对应的左括号
  const bracketsMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let char of s) {
    // 如果是左括号，将其入栈
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else {
      // 如果是右括号
      // 检查栈是否为空，如果为空则说明没有对应的左括号，返回 false
      if (stack.length === 0) {
        return false;
      }
      // 取出栈顶元素
      const top = stack.pop();
      // 如果栈顶元素不是当前右括号对应的左括号，返回 false
      if (top !== bracketsMap[char]) {
        return false;
      }
    }
  }
  // 遍历完字符串后，如果栈为空，说明所有括号都匹配，返回 true，否则返回 false
  return stack.length === 0;
}
console.log(isValid("()")); // 应该输出 true
console.log(isValid("()[]{}")); // 应该输出 true
console.log(isValid("(]")); // 应该输出 false
console.log(isValid("([)]")); // 应该输出 false
console.log(isValid("{[]}")); // 应该输出 true
