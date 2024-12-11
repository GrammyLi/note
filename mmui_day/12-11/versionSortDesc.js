// 版本号排序：
// 输入： ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
// 输出： ['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']
/*

以下是该 versionSortDesc 函数实现版本号降序排序的简单步骤：
数据准备：
对于要比较的两个版本号字符串 a 和 b，先通过 split('.') 按点分割成字符串数组，
再用 map(Number) 把各字符串元素转成数字数组，分别得到 v1 和 v2。

逐位比较：
循环比较 v1 和 v2 数组对应位置的数字，循环次数取两者长度中较长的那个。
每次循环获取当前位置数字 num1（v1 中）和 num2（v2 中），若 num1 与 num2 不同
按降序要求返回 num2 - num1，让 sort 函数据此调整顺序。

相同处理：
若循环完所有位置数字都一样，就返回 0，表示这两个版本号顺序不变。
这样经过 sort 函数基于自定义比较逻辑的处理，就能实现版本号数组的降序排序了。
*/
const versionSortDesc = (versions) => {
  return versions.sort((a, b) => {
    let v1 = a.split(".");
    let v2 = b.split(".");
    let max = Math.max(v1.length, v2.length);
    for (let i = 0; i < max; i++) {
      let num1 = v1[i] || 0;
      let num2 = v2[i] || 0;
      return num2 - num1;
    }
  });
};

let arr = ["2.1.0.1", "0.402.1", "10.2.1", "5.1.2", "1.0.4.5"];
console.log(versionSortDesc(arr));
// 输出： ['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']

// 数字数组升序排序
let numbers = [40, 100, 1, 5, 25];
numbers.sort((a, b) => {
  if (a - b > 0) {
    return 1;
  } else if (a - b < 0) {
    return -1;
  }
  return 0;
});
console.log(numbers);
// 输出: [1, 5, 25, 40, 100]

// 降序
let numbers2 = [40, 100, 1, 5, 25];
numbers2.sort((a, b) => {
  if (a - b < 0) {
    // 当a小于b时（a - b < 0）
    return 1; // 返回1，表示a应该排在b后面，从而实现降序
  } else if (a - b > 0) {
    return -1; // 返回-1，表示a应该排在b前面
  }
  return 0; // 如果a和b相等，返回0，保持顺序不变
});
console.log(numbers2);
// 输出: [100, 40, 25, 5, 1]
