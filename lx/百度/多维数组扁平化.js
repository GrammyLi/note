// 题目描述： 将一个多维数组扁平化为一维数组。

function flattenArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

const multiDimensionalArray = [1, [2, [3, [4]], 5]];
const flattenedArray = flattenArray(multiDimensionalArray);
console.log(flattenedArray); // 输出: [1, 2, 3, 4, 5]
