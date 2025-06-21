// 题 2：
// 数组扁平化
// 输入：list = [1, [2, [3, 4]]]
// 输出：[1,2,3,4]

const flatten = (arr) => {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let arr2 = flatten(arr[i]);
      r = r.concat(arr2);
    } else {
      r.push(arr[i]);
    }
  }
  return r;
};
const list = [1, [2, [3, 4]]];
console.log(flatten(list));
