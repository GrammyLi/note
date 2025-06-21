// 归并两个有序数组

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

// 题目描述：把归并结果存到第一个数组上。

// 需要从尾开始遍历，否则在 nums1 上归并得到的值会覆盖还未进行归并比较的值。

const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1; // nums1 有效部分的末尾
  let index2 = n - 1; // nums2 的末尾
  let indexMerge = m + n - 1; // nums1 总数组的末尾

  while (index2 >= 0) {
    if (index1 < 0) {
      // nums1 的所有有效元素已处理完，直接复制 nums2 的元素
      nums1[indexMerge] = nums2[index2];
      indexMerge -= 1;
      index2 -= 1;
    } else if (nums1[index1] > nums2[index2]) {
      // nums1 当前值更大
      nums1[indexMerge] = nums1[index1];
      indexMerge -= 1;
      index1 -= 1;
    } else {
      // nums2 当前值更大或相等
      nums1[indexMerge] = nums2[index2];
      indexMerge -= 1;
      index2 -= 1;
    }
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // 输出: [1, 2, 2, 3, 5, 6]
