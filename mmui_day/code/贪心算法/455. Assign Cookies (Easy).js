// 分配饼干
// 贪心算法思路：
// 排序：我们首先对孩子的满足度数组 grid 和饼干的大小数组 size 进行排序。
// 分配饼干：从满足度最小的孩子开始，尽可能给这个孩子分配最小的能够满足它的饼干，这样能保证剩下的饼干可以用于满足其他孩子。
// 最大化满足孩子的数量：每次分配饼干时，我们就尝试满足一个孩子，直到所有孩子或者所有饼干都处理完为止。

// 贪心算法的正确性：
// 我们选择从满足度最小的孩子开始，使用尽可能小的饼干。这是因为，只有当一个孩子的饼干能够满足时，才能继续往下走，而较小的饼干能给满足度较小的孩子，剩下的大饼干可以分配给满足度较大的孩子，这样最大化能满足的孩子数量

const log = console.log.bind(console);

const ensure = function (condition, message) {
  // 在条件不成立的时候, 输出 message
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 455. Assign Cookies
const findContentChildren = (grid, size) => {
  grid.sort((a, b) => a - b);
  size.sort((a, b) => a - b);

  let childIndex = 0; // 孩子的指针
  let cookieIndex = 0; // 饼干的指针
  let satisfiedChildren = 0; // 满足的孩子数

  // 使用双指针遍历饼干和孩子
  while (childIndex < grid.length && cookieIndex < size.length) {
    // 如果当前饼干能满足当前孩子的需求
    if (size[cookieIndex] >= grid[childIndex]) {
      satisfiedChildren++; // 满足一个孩子
      childIndex++; // 下一个孩子
    }
    cookieIndex++; // 无论是否满足，都要查看下一个饼干
  }

  return satisfiedChildren;
};

const test_findContentChildren = () => {
  ensure(findContentChildren([1, 3], [1, 2, 4]) === 2, "findContentChildren 1");
  ensure(findContentChildren([1, 2, 3], [1, 1]) === 1, "findContentChildren 2");
  ensure(
    findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]) === 2,
    "findContentChildren 3"
  );
  ensure(
    findContentChildren([1, 2, 3], [3, 2, 1]) === 3,
    "findContentChildren 4"
  );
  log("*** findContentChildren 测试成功");
};

const main = () => {
  test_findContentChildren();
};

main();
