// 二分查找（适用于排序数组）
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
console.log(binarySearch([1, 2, 3, 4], 3)); // true
