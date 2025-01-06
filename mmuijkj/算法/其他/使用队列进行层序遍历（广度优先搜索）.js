// 使用队列进行层序遍历（广度优先搜索）

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function getLeafNodes(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    // 判断当前节点是否为叶子节点
    if (node.left === null && node.right === null) {
      result.push(node.val);
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return result;
}

// 示例用法
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.log(getLeafNodes(root));
