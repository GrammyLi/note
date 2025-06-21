// 问题描述：给定一棵二叉树，输出从左视图能看到的节点。
function leftView(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (i === 0) {
        result.push(node.val); // 记录每层第一个节点
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return result;
}

// 示例树结构
const tree = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, right: { val: 6 } },
};

console.log(leftView(tree)); // 输出：[1, 2, 4]
