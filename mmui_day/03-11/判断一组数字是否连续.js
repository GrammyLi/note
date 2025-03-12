const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 使用 Map 创建连续数字区间
const groupConsecutiveNumbers = (numbers) => {
  if (!numbers || numbers.length === 0) return []; // 如果数组为空，返回空数组

  const map = new Map(); // 创建一个 Map 用来存储数字
  const result = []; // 用来存储最终结果

  // 先将数字放入 Map 中，并将它们的值设为 false
  numbers.forEach((num) => map.set(num, false));

  let start = null; // 用来记录连续区间的起始数字

  // 遍历所有数字
  for (let num of numbers) {
    if (start === null) {
      start = num; // 初始化连续区间的起始数字
    }

    // 判断当前数字是否是连续的
    // 如果当前数字的下一个数字不在 Map 中，则说明当前数字已经是区间的末尾
    if (!map.has(num + 1)) {
      if (start === num) {
        // 如果连续区间只有一个数字，就直接加这个数字
        result.push(`${start}`);
      } else {
        // 如果连续区间有多个数字，按 "start-end" 格式加入结果
        result.push(`${start}-${num}`);
      }
      start = null; // 结束当前区间，准备开始下一个区间
    }
  }

  return result; // 返回结果
};

// 测试用例
const test_groupConsecutiveNumbers = () => {
  ensure(
    JSON.stringify(groupConsecutiveNumbers([1, 2, 3, 4, 6, 8, 9, 10])) ===
      JSON.stringify(["1-4", "6", "8-10"]),
    "测试用例 1"
  );

  ensure(
    JSON.stringify(groupConsecutiveNumbers([1, 2, 4, 5, 7, 8, 9])) ===
      JSON.stringify(["1-2", "4-5", "7-9"]),
    "测试用例 2"
  );

  ensure(
    JSON.stringify(groupConsecutiveNumbers([1, 3, 4, 5, 7, 8, 9, 10, 15])) ===
      JSON.stringify(["1", "3-5", "7-10", "15"]),
    "测试用例 3"
  );

  ensure(
    JSON.stringify(groupConsecutiveNumbers([1])) === JSON.stringify(["1"]),
    "测试用例 4"
  );

  ensure(
    JSON.stringify(groupConsecutiveNumbers([])) === JSON.stringify([]),
    "测试用例 5"
  );

  ensure(
    JSON.stringify(
      groupConsecutiveNumbers([5, 6, 7, 8, 9, 12, 13, 14, 15, 20])
    ) === JSON.stringify(["5-9", "12-15", "20"]),
    "测试用例 6"
  );

  log("*** groupConsecutiveNumbers 测试成功");
};

test_groupConsecutiveNumbers();
