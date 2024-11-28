const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message); // 输出失败信息
  } else {
    log("||| 测试成功"); // 输出成功信息
  }
};

// 版本号比较函数
// 思路：
/**
1. 将版本号拆分为数组：用 split('.') 把 version1 和 version2 分割成数组 v1 和 v2，每个数组中的元素是数字字符串。
2. 填充数组使它们长度相同：计算两个数组的最大长度，然后用 0 补齐较短的数组。
3. 逐个比较两个数组的元素：从左到右逐个比较对应的元素。如果一个数组的元素大于另一个数组，返回 1；如果小，返回 -1；如果都相等，继续比较下一个元素。
4. 如果所有元素都相等，返回 0
 */
function compareVersion(version1, version2) {
  const v1 = version1.split(".").map(Number);
  const v2 = version2.split(".").map(Number);

  const maxLength = Math.max(v1.length, v2.length);

  // 使用 fill 方法填充较短的数组
  v1.length = maxLength; // 修改原数组长度
  v2.length = maxLength;

  // 使用 fill(0) 来填充较短的部分
  v1.fill(0, v1.length); // 从索引 v1.length 开始填充
  v2.fill(0, v2.length); // 从索引 v2.length 开始填充

  //   while (v1.length < maxLength) v1.push(0); // 补齐较短版本号
  //   while (v2.length < maxLength) v2.push(0); // 补齐较短版本号

  // 逐个比较
  for (let i = 0; i < maxLength; i++) {
    if (v1[i] > v2[i]) return 1;
    if (v1[i] < v2[i]) return -1;
  }

  return 0; // 如果完全相等
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
