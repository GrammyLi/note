//  https://ziyi2.github.io/algorithms/basic/insertion.html#%E4%BB%8B%E7%BB%8D

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j <= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j -= 1;
    }

    arr[j + 1] = current;
  }
  return arr;
};

// 测试
const arr = [12, 11, 13, 5, 6];
console.log("原始数组:", arr);
const sortedArr = insertionSort(arr);
console.log("排序后的数组:", sortedArr);
