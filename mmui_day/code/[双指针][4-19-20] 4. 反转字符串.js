const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // 交换字符
    [s[left], s[right]] = [s[right], s[left]];
    // 移动指针
    left++;
    right--;
  }
};

// 测试用例
const test_reverseString = () => {
  const s1 = ["h", "e", "l", "l", "o"];
  reverseString(s1);
  console.log(s1); // 输出: ["o", "l", "l", "e", "h"]

  const s2 = ["a", "b", "c", "d", "e"];
  reverseString(s2);
  console.log(s2); // 输出: ["e", "d", "c", "b", "a"]

  const s3 = ["r", "a", "c", "e", "c", "a", "r"];
  reverseString(s3);
  console.log(s3); // 输出: ["r", "a", "c", "e", "c", "a", "r"]（回文，反转后不变）

  const s4 = [];
  reverseString(s4);
  console.log(s4); // 输出: []（空数组）
};

// 执行测试
test_reverseString();
