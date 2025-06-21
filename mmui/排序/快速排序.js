//  https://ziyi2.github.io/algorithms/basic/insertion.html#%E4%BB%8B%E7%BB%8D

function insertionSort(arr) {
  // 从数组第二个元素开始遍历（把第一个元素当作已排好序的部分）
  for (let i = 1; i < arr.length; i++) {
    // 拿出当前要插入已排序部分的元素（也就是未排序部分的第一个元素）
    let key = arr[i];
    // 标记已排序部分里要拿来比较的元素位置（先从当前要插入元素的前一个开始）
    let j = i - 1;

    // 只要还没比到已排序部分最前面（j >= 0），且当前已排序元素比要插入的元素大
    // 就把这个已排序元素往后挪一位，给要插入的元素腾位置，然后继续往前比
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // 找到合适位置了，把要插入的元素放进去
    arr[j + 1] = key;
  }
  // 所有元素都处理完了，返回排好序的数组
  return arr;
}

// 示例用法
let array = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertionSort(array));
