// 题目描述：
// 给定两个版本号 version1 和 version2，请你比较它们。版本号由若干整数组成，使用 . 分隔，每个整数表示一个版本号的部分。你需要实现以下的功能：

// 如果 version1 > version2，返回 1。
// 如果 version1 < version2，返回 -1。
// 如果 version1 == version2，返回 0

const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message); // 输出失败信息
  } else {
    log("||| 测试成功"); // 输出成功信息
  }
};

/**
1. 将版本号拆分为数组：用 split('.') 把 version1 和 version2 分割成数组 v1 和 v2，每个数组中的元素是数字字符串。
2. 填充数组使它们长度相同：计算两个数组的最大长度，然后用 0 补齐较短的数组。
3. 逐个比较两个数组的元素：从左到右逐个比较对应的元素。如果一个数组的元素大于另一个数组，返回 1；如果小，返回 -1；如果都相等，继续比较下一个元素。
4. 如果所有元素都相等，返回 0
 */
function compareVersion(version1, version2) {
  // 1. 将版本号拆分为数组：用 split('.') 把 version1 和 version2 分割成数组 v1 和 v2，每个数组中的元素是数字字符串。
  let v1 = version1.split(".").map((el) => Number(el));
  let v2 = version2.split(".").map((el) => Number(el));

  let maxLen = Math.max(v1.length, v2.length);

  //   2. 填充数组使它们长度相同：计算两个数组的最大长度，然后用 0 补齐较短的数组。
  while (v1 < maxLen) {
    v1.push(0);
  }
  while (v2 < maxLen) {
    v2.push(0);
  }
  //   3. 逐个比较两个数组的元素：从左到右逐个比较对应的元素。如果一个数组的元素大于另一个数组，返回 1；如果小，返回 -1；如果都相等，继续比较下一个元素。
  for (let i = 0; i < maxLen; i++) {
    if (v1[i] > v2[i]) {
      return 1;
    } else if (v1[i] < v2[i]) {
      return -1;
    }
  }
  //   4. 如果所有元素都相等，返回 0
  return 0;
}

// 测试用例
const test_compareVersion = () => {
  ensure(compareVersion("1.2.3", "1.2.4") === -1, "测试用例 1: 1.2.3 < 1.2.4");
  ensure(compareVersion("1.2", "1.2.0") === 0, "测试用例 2: 1.2 == 1.2.0");
  ensure(compareVersion("1.3.0", "1.2.9") === 1, "测试用例 3: 1.3.0 > 1.2.9");
  ensure(compareVersion("2.0.0", "1.9.9") === 1, "测试用例 4: 2.0.0 > 1.9.9");
  ensure(compareVersion("1.10.0", "1.9.9") === 1, "测试用例 5: 1.10.0 > 1.9.9");
  ensure(compareVersion("1.2.3", "1.2.3") === 0, "测试用例 6: 1.2.3 == 1.2.3");

  log("*** compareVersion 函数测试完成");
};

test_compareVersion();
