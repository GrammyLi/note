// 最长子序列
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output:
// "apple"

/**
 
题目描述：删除 s 中的一些字符，使得它构成字符串列表 d 中的一个字符串，
找出能构成的最长字符串。如果有多个相同长度的结果，返回字典序的最小字符串。

通过删除字符串 s 中的一个字符能得到字符串 t，可以认为 t 是 s 的子序列，
我们可以使用双指针来判断一个字符串是否为另一个字符串的子序列。
 */

// 判断字符串 t 是否是字符串 s 的子序列
const isSubsequence = (s, t) => {
  let i = 0; // 指向字符串 s
  let j = 0; // 指向字符串 t
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      j++; // 如果匹配，移动 t 的指针
    }
    i++; // 无论是否匹配，都移动 s 的指针
  }
  return j === t.length; // 如果 t 的所有字符都被匹配到，则是子序列
};

const findLongestWord = (s, d) => {
  let result = "";
  for (const word of d) {
    if (
      isSubsequence(s, word) && // 判断是否为子序列
      (word.length > result.length || // 比当前结果更长
        (word.length === result.length && word < result)) // 或者长度相同但字典序更小
    ) {
      result = word; // 更新结果
    }
  }
  return result;
};
