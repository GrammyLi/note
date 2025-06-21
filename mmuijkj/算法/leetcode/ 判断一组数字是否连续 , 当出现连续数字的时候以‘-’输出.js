// 判断一组数字是否连续
// 当出现连续数字的时候以‘-’输出
// 输入：[1, 2, 3, 4, 6, 8, 9, 10]
// 输出: ["1-4", 6, "8-10"]

// 思路：
// 1. 找出连续开始位置
// 2. 找出连续结束位置
// 3. 不连续的位置的值直接push

const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 判断一组数字是否连续
const groupConsecutiveNumbers = (numbers) => {
  // 如果输入为空数组，返回空数组
  if (!numbers || numbers.length === 0) return [];

  // 用来存储最终结果的数组
  let result = [];
  // 用 start 和 end 记录当前连续区间的起始和结束数字
  let start = numbers[0];
  let end = numbers[0];

  // 遍历数组，从第二个数字开始
  for (let i = 1; i < numbers.length; i++) {
    // 如果当前数字与上一数字连续（即 当前数字 == 前一个数字 + 1）
    if (numbers[i] === end + 1) {
      // 更新连续区间的结束数字
      end = numbers[i];
    } else {
      // 如果当前数字不连续，处理之前的连续区间
      if (start === end) {
        // 如果 start 和 end 是同一个数字，直接将该数字添加到结果中
        result.push(`${start}`);
      } else {
        // 如果区间有多个数字，格式化为 "start-end" 的形式
        result.push(`${start}-${end}`);
      }
      // 重置连续区间的起始和结束数字
      start = numbers[i];
      end = numbers[i];
    }
  }

  // 处理最后一个连续区间（因为循环结束后，最后一段区间没有被添加）
  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}-${end}`);
  }

  return result;
};

// 测试用例
const test_groupConsecutiveNumbers = () => {
  // 测试用例 1: 包含连续数字
  ensure(
    JSON.stringify(groupConsecutiveNumbers([1, 2, 3, 4, 6, 8, 9, 10])) ===
      JSON.stringify(["1-4", "6", "8-10"]),
    "测试用例 1"
  );

  // 测试用例 2: 存在多个连续区间
  ensure(
    JSON.stringify(groupConsecutiveNumbers([1, 2, 4, 5, 7, 8, 9])) ===
      JSON.stringify(["1-2", "4-5", "7-9"]),
    "测试用例 2"
  );

  // 测试用例 3: 存在不连续的数字和多个区间
  ensure(
    JSON.stringify(groupConsecutiveNumbers([1, 3, 4, 5, 7, 8, 9, 10, 15])) ===
      JSON.stringify(["1", "3-5", "7-10", "15"]),
    "测试用例 3"
  );

  // 测试用例 4: 只有一个数字
  ensure(
    JSON.stringify(groupConsecutiveNumbers([1])) === JSON.stringify(["1"]),
    "测试用例 4"
  );

  // 测试用例 5: 空数组
  ensure(
    JSON.stringify(groupConsecutiveNumbers([])) === JSON.stringify([]),
    "测试用例 5"
  );

  // 测试用例 6: 大范围的连续数字
  ensure(
    JSON.stringify(
      groupConsecutiveNumbers([5, 6, 7, 8, 9, 12, 13, 14, 15, 20])
    ) === JSON.stringify(["5-9", "12-15", "20"]),
    "测试用例 6"
  );

  log("*** groupConsecutiveNumbers 测试成功");
};

test_groupConsecutiveNumbers();
