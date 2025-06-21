// 回文字符串

// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// 题目描述：可以删除一个字符，判断是否能构成回文字符串。
const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const validPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      // 尝试跳过左边或右边的字符
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }
    i++;
    j--;
  }

  return true; // 如果已经是回文字符串
};

// let r = validPalindrome("abca");
// console.log("r", r); // Output: True
let s = "raceacar";
let r = validPalindrome(s);
console.log("r", r);
