const groupAnagrams = (strs) => {
  const map = new Map(); // 用于存储字母异位词的分组

  for (const str of strs) {
    // 将字符串排序作为键
    const sortedStr = str.split("").sort().join("");

    // 如果 map 中已经有这个键，直接将当前字符串添加到对应的分组中
    if (map.has(sortedStr)) {
      map.get(sortedStr).push(str);
    } else {
      // 如果没有该键，则新增一个分组
      map.set(sortedStr, [str]);
    }
  }

  // 返回所有分组
  return Array.from(map.values());
};

// 测试用例
const test_groupAnagrams = () => {
  const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  console.log(result); // 输出 [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
  ensure(result.length === 3, "groupAnagrams");
  log("*** groupAnagrams 测试成功");
};

// 辅助函数
const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 执行测试
test_groupAnagrams();
