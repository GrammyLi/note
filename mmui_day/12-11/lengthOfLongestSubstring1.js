// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/

// 无重复字符的最长子串
// 滑动窗口法‌
/*
1. 声明两个变量，一个记录开始索引位置 lef t，一个是记录结束索引位置 right，用 无重复的数组记录当前当前的字符 chars
2. 无限循环，判断记录结束索引位置 right , 是到终点位置,(小于入参的长度就行)
3. 获取当前索引下，对应 right 下字符，如果不包含在 chars 中，记录当前字符，移动 right,判断当前最长子串长度，如果包含，删除当前 chars 字符，移动 left
*/

const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) {
    return 0;
  }
  let max = 0;
  let left = 0;
  let right = 0;
  let chars = new Set();
  while (right < s.length) {
    if (!chars.has(s[right])) {
      chars.add(s[right]);
      max = Math.max(max, chars.size);
      right += 1;
    } else {
      chars.delete(s[left]);
      left += 1;
    }
  }
  return max;
};

const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";
const s4 = ""; // 空字符串
const s5 = "abcabcd"; // 空字符串

console.log(lengthOfLongestSubstring(s1)); // 输出: 3
console.log(lengthOfLongestSubstring(s2)); // 输出: 1
console.log(lengthOfLongestSubstring(s3)); // 输出: 3
console.log(lengthOfLongestSubstring(s5)); // 输出: 0 (空字符串的情况)
