// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列， 不是子串。

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  const charSet = new Set();
  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, charSet.size);
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
  return maxLength;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
