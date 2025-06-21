// 判断是否为子序列
// s = "abc", t = "ahbgdc"
// Return true.

const log = console.log.bind(console);

const ensure = function (condition, message) {
  // 在条件不成立的时候, 输出 message
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 392. Is Subsequence
const isSubsequence = (s, t) => {
  let sIndex = 0;
  let tIndex = 0;

  // 遍历 t 中的字符
  while (sIndex < s.length && tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++; // 如果字符匹配，移动 s 的指针
    }
    tIndex++; // 始终移动 t 的指针
  }

  return sIndex === s.length; // 如果 s 中的所有字符都匹配上，返回 true
};

const test_isSubsequence = () => {
  ensure(isSubsequence("abc", "ahbgdc") === true, "isSubsequence 1");
  ensure(isSubsequence("axc", "ahbgdc") === false, "isSubsequence 2");
  ensure(isSubsequence("", "ahbgdc") === true, "isSubsequence 3"); // 空字符串是任何字符串的子序列
  ensure(isSubsequence("abc", "") === false, "isSubsequence 4"); // 非空字符串无法是空字符串的子序列
  log("*** isSubsequence 测试成功");
};

const main = () => {
  test_isSubsequence();
};

main();
