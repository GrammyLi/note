/**
 * 
LeetCode 题目 102：二叉树的层序遍历 要求实现一个算法，按照层级顺序遍历二叉树，并返回一个二维数组，数组中的每个元素是该层的节点值。

       3
      / \
     9  20
        /  \
       15   7

[
  [3],
  [9, 20],
  [15, 7]
]

思路：
层序遍历：可以利用 广度优先搜索（BFS） 来实现层序遍历。BFS 从根节点开始，逐层遍历树的节点，
可以使用队列来辅助遍历。

队列：我们使用一个队列来存储当前层的所有节点，在遍历时从队列中取出节点，然后将其子节点添加到队列中，直到队列为空。


步骤：
初始化一个队列，把根节点放入队列。
每次处理队列中的所有节点（这一层的节点），然后将它们的子节点加入队列。
每次处理一层的节点时，将这一层的节点值保存到结果数组中。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * };
 */

const levelOrder = (root) => {
  if (!root) return [];

  let r = [];
  // 队列：我们使用一个队列来存储当前层的所有节点，在遍历时从队列中取出节点，然后将其子节点添加到队列中，直到队列为空。
  let q = [root];

  while (q.length) {
    let size = q.length;
    // 当前一层，数据
    let level = [];
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      level.push(node.val);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }
    r.push(level);
  }
  return r;
};

// 定义二叉树节点
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

// 构建树
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// 层序遍历
console.log(levelOrder(root)); // 输出: [[3], [9, 20], [15, 7]]
