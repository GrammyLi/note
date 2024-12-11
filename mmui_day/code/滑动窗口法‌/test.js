// function lengthOfLongestSubstring(s) {
//   if (s.length === 0) return 0; // 如果输入字符串为空，直接返回 0

//   const charSet = new Set(); // 用于存储当前窗口中唯一的字符
//   let left = 0; // 左指针，表示滑动窗口的左边界
//   let right = 0; // 右指针，表示滑动窗口的右边界
//   let maxLength = 0; // 存储找到的最大子串长度

//   while (right < s.length) {
//     // 如果右指针指向的字符不在字符集里，说明当前子串没有重复字符
//     if (!charSet.has(s[right])) {
//       charSet.add(s[right]); // 将右指针指向的字符加入字符集
//       // maxLength = Math.max(maxLength, charSet.size); // 直接使用 charSet.size 更新最大子串长度
//       maxLength = Math.max(maxLength, right - left + 1); // 更新最大子串长度
//       right++; // 右指针右移，扩大窗口
//     } else {
//       // 如果右指针指向的字符已存在于字符集，说明当前子串有重复字符
//       charSet.delete(s[left]); // 删除左指针指向的字符，缩小窗口
//       left++; // 左指针右移，去除重复字符
//     }
//   }

//   return maxLength; // 返回最大子串长度
// }

const s1 = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";
const s4 = ""; // 空字符串
const s5 = "abcabcd"; // 空字符串

const lengthOfLongestSubstring = (s) => {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let longestSubstring = "";
  let chars = new Set();

  while (right < s.length) {
    let r = s[right];
    let l = s[left];
    if (!chars.has(s[r])) {
      chars.add(r);
      if (chars.length > maxLength) {
        maxLength = chars.size;
        longestSubstring = s.slice(left, right);
      }
      right++;
    } else {
      chars.delete(l);
      left--;
    }
  }

  return longestSubstring;
};

console.log(lengthOfLongestSubstring(s1)); // 输出: 3
console.log(lengthOfLongestSubstring(s2)); // 输出: 1
console.log(lengthOfLongestSubstring(s3)); // 输出: 3
console.log(lengthOfLongestSubstring(s5)); // 输出: 0 (空字符串的情况)
