function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let longestSubstring = "";
  const charSet = new Set();
  while (right < s.length) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      right++;
      if (charSet.size > maxLength) {
        maxLength = charSet.size;
        longestSubstring = s.slice(left, right);
      }
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }
  return [maxLength, longestSubstring];
}

const s = "abcabcbb";
const result1 = lengthOfLongestSubstring(s);
console.log("长度:", result1[0], "子串:", result1[1]);

const result2 = lengthOfLongestSubstring("bbbbb");
console.log("长度:", result2[0], "子串:", result2[1]);

const result3 = lengthOfLongestSubstring("pwwkew");
console.log("长度:", result3[0], "子串:", result3[1]);
