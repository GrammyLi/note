// 给定两个数组 a 和 b，判断 a 是否是 b 的子集

function isSubset(a, b) {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  // 用双指针进行顺序比较。
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
    }
    j++;
  }
  return i === a.length;
}
