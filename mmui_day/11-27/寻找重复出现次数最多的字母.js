const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 寻找重复出现次数最多的字母
const mostFrequentLetter = (str) => {
  const freqMap = new Map();

  // 统计字母频次
  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) {
      // 只考虑字母，忽略非字母字符
      const lowerChar = char.toLowerCase(); // 将字母转为小写，以免大小写重复计算
      freqMap.set(lowerChar, (freqMap.get(lowerChar) || 0) + 1);
    }
  }

  let maxCount = 0;
  let mostFrequent = "";

  // 找出出现次数最多的字母
  for (let [char, count] of freqMap) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = char;
    }
  }

  return mostFrequent;
};

// 测试
const test_mostFrequentLetter = () => {
  ensure(mostFrequentLetter("hello") === "l", "mostFrequentLetter 'hello'");
  ensure(
    mostFrequentLetter("aabbbcccc") === "c",
    "mostFrequentLetter 'aabbbcccc'"
  );
  ensure(
    mostFrequentLetter("xyzxyzxyz") === "x",
    "mostFrequentLetter 'xyzxyzxyz'"
  );
  ensure(
    mostFrequentLetter("aaaBBBccc") === "a",
    "mostFrequentLetter 'aaaBBBccc'"
  );
  ensure(mostFrequentLetter("apple") === "p", "mostFrequentLetter 'apple'");

  log("*** mostFrequentLetter 测试成功");
};

test_mostFrequentLetter();
