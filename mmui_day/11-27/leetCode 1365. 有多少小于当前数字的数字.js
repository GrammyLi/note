// 题 4：
// 输入一个数组 nums，对于其中每个元素 nums[i]，请统计数组中比它小的所有数字的数目。
// 以数组形式返回答案，不能用 sort 和 filter。
// leetCode 1365. 有多少小于当前数字的数字

// 示例 ：
//   输入：nums = [8,1,2,2,3]
//   输出：[4,0,1,1,3]

// 方法1
// - 思路: 先拷贝数组，升序排序，遍历原数组当前元素在有序数组的index的值，就是比该元素小的元素个数
// - 注意点:
//    - 1. arr.indexOf(parameter) 返回的是 ( 参数元素parameter ) 在数组中 ( 第一次出现的位置 )
const lessLen = (arr) => {
  const copy = [...arr].sort((a, b) => a - b); // 升序拷贝  [1, 2, 2, 3, 8]
  return arr.map((value) => copy.indexOf(value));
};
const lessLenArr = lessLen([8, 1, 2, 2, 3]);
console.log("lessLenArr: ", lessLenArr);

const lessLen1 = (nums) => {
  let r = [];
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (n > r[j]) {
        count += 1;
      }
    }
    r.push(count);
  }
  return r;
};

/*

  // 方法2 - O(n^2)
      const lessLen1 = (arr) => {
        const len = arr.length;
        const res = new Array(len).fill(0); // 初始值是 [0,0,0,0,0]
        for (let i = 0; i < len; i++) {
          for (let j = 0; j < len; j++) {
            // 注意j也必须是从0开始比较，因为前面的值也可能比当前的值小
            if (arr[i] > arr[j]) {
              res[i]++;
            }
          }
        }
        return res;
      };
      const lessLenArr1 = lessLen1([8, 1, 2, 2, 3]);
      console.log("lessLenArr1: ", lessLenArr1)
*/
