const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// ensure(change(1234) === 4231, "change 1234"); // 交换 1 和 4
// ensure(change(2736) === 7236, "change 2736"); // 交换 2 和 7
const maximumSwap1 = (num) => {
  let ns = String(num).split("");
  let max = num;
  for (let i = 0; i < ns.length; i++) {
    for (let j = i + 1; j < ns.length; j++) {
      [ns[i], ns[j]] = [ns[j], ns[i]];
      let newMax = parseInt(ns.join(""));
      if (newMax > max) {
        max = newMax;
      }
      [ns[j], ns[i]] = [ns[i], ns[j]];
    }
  }

  return max;
};

maximumSwap1(1234);

// change 方法实现
const change = (num) => {
  const str = num.toString(); // 将数字转成字符串
  const arr = str.split(""); // 转成字符数组，方便交换字符
  let maxNum = num; // 初始最大值为原始数字

  // 遍历每一位
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 如果找到比当前数字大的数字，就交换它们
      let tempArr = [...arr]; // 创建一个副本，避免修改原始数组
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]]; // 交换
      let newNum = parseInt(tempArr.join("")); // 交换后的新数字

      // 更新最大值
      if (newNum > maxNum) {
        maxNum = newNum;
      }
    }
  }

  return maxNum;
};

// 测试
const test_change = () => {
  ensure(change(1234) === 4231, "change 1234"); // 交换 1 和 4
  ensure(change(2736) === 7236, "change 2736"); // 交换 2 和 7
  ensure(change(9973) === 9973, "change 9973"); // 不需要交换
  ensure(change(1) === 1, "change 1"); // 只有一位，不需要交换

  log("*** change 测试成功");
};

test_change();
// 解法 2：通过预处理优化的解法
// 可以通过 预处理 来降低时间复杂度。我们可以利用 最大数字位置的预处理，来在一次遍历中找出最佳的交换位置。

// 从左到右遍历数字：找到每个位置后面的最大数字，并记录其位置。
// 交换时选择最大的数字：当我们遇到比后面的最大数字还小的数字时，进行交换，最大化当前数字。
const maximumSwap = (num) => {
  const digits = num.toString().split("");
  const n = digits.length;

  // 创建一个数组记录每个数字的最大位置
  const lastIndex = new Array(10).fill(-1); // 存储每个数字最后出现的位置
  for (let i = 0; i < n; i++) {
    lastIndex[digits[i]] = i;
  }

  // 遍历数字，寻找可以交换的位置
  for (let i = 0; i < n; i++) {
    // 从 9 到当前数字中最大的数
    for (let d = 9; d > digits[i]; d--) {
      if (lastIndex[d] > i) {
        // 找到更大的数字，交换并返回
        [digits[i], digits[lastIndex[d]]] = [digits[lastIndex[d]], digits[i]];
        return parseInt(digits.join(""));
      }
    }
  }

  return num; // 如果没有找到合适的交换，返回原数字
};

// 测试
const test_maximumSwap = () => {
  ensure(maximumSwap(1234) === 4231, "maximumSwap 1234");
  ensure(maximumSwap(2736) === 7236, "maximumSwap 2736");
  ensure(maximumSwap(9973) === 9973, "maximumSwap 9973");
  ensure(maximumSwap(1) === 1, "maximumSwap 1");

  log("*** maximumSwap 测试成功");
};

test_maximumSwap();

const findMax = (num) => {
  const arr = String(num).split("");

  let max = num;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      const next = Number(arr.reduce((prev, next) => prev + next)); // 交换后的值，因为+存在重载，当是字符串+时，是相连，所以不影响
      if (next > max) {
        max = next;
      }
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换后，再交换回来，则不影响下一次比较
    }
  }

  return max;
};

const res = findMax(1234);
console.log("res: ", res);
