const isValid = (s) => {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 如果是左括号，压入栈
    if (map[char]) {
      stack.push(char);
    } else {
      // 如果是右括号，检查栈顶是否匹配
      const top = stack.pop();
      if (map[top] !== char) {
        return false; // 不匹配，返回 false
      }
    }
  }

  // 如果栈为空，说明所有括号都匹配
  return stack.length === 0;
};

// 测试用例
const test_isValid = () => {
  console.log(isValid("()")); // 输出: true
  console.log(isValid("()[]{}")); // 输出: true
  console.log(isValid("(]")); // 输出: false
  console.log(isValid("([)]")); // 输出: false
  console.log(isValid("{[]}")); // 输出: true
  console.log(isValid("")); // 输出: true (空字符串是有效的)
};

// 执行测试
test_isValid();
