/**
 * 力扣88
 */

// 同样采用双指针的思路从后往前合并两个有序数组
function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  // 双指针从后往前遍历，比较并放置较大元素到nums1末尾
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  // 如果nums2还有剩余元素，将其依次放入nums1前面
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
const result = merge(nums1, m, nums2, n);
console.log(result);
