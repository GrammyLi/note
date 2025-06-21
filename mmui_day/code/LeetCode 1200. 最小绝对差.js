const log = console.log.bind(console);

const ensure = function (condition, message) {
  // 在条件不成立的时候, 输出 message
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 判断一组数字是否连续
const findContinuousRanges = (nums) => {
  let result = [];
  let start = 0; // 记录连续数字的起始位置

  for (let i = 1; i <= nums.length; i++) {
    // 如果当前元素与下一个元素不连续或者已经是最后一个元素
    if (nums[i] !== nums[i - 1] + 1 || i === nums.length) {
      if (i - start > 1) {
        result.push(`${nums[start]}-${nums[i - 1]}`);
      } else {
        result.push(nums[start].toString());
      }
      start = i; // 更新起始位置
    }
  }

  return result;
};

// 测试用例
const test_findContinuousRanges = () => {
  // 测试用例 1
  ensure(
    JSON.stringify(findContinuousRanges([1, 2, 3, 4, 6, 8, 9, 10])) ===
      JSON.stringify(["1-4", 6, "8-10"]),
    "findContinuousRanges [1, 2, 3, 4, 6, 8, 9, 10]"
  );

  // 测试用例 2
  ensure(
    JSON.stringify(findContinuousRanges([1, 3, 4, 5, 7, 8, 9, 10])) ===
      JSON.stringify([1, "3-5", "7-10"]),
    "findContinuousRanges [1, 3, 4, 5, 7, 8, 9, 10]"
  );

  // 测试用例 3
  ensure(
    JSON.stringify(findContinuousRanges([1, 2, 4, 5, 6, 7])) ===
      JSON.stringify(["1-2", "4-7"]),
    "findContinuousRanges [1, 2, 4, 5, 6, 7]"
  );

  // 测试用例 4
  ensure(
    JSON.stringify(findContinuousRanges([10, 12, 14, 15])) ===
      JSON.stringify([10, 12, "14-15"]),
    "findContinuousRanges [10, 12, 14, 15]"
  );

  // 测试用例 5
  ensure(
    JSON.stringify(findContinuousRanges([5, 6, 7, 8, 9])) ===
      JSON.stringify(["5-9"]),
    "findContinuousRanges [5, 6, 7, 8, 9]"
  );

  log("*** findContinuousRanges 测试成功");
};

test_findContinuousRanges();
