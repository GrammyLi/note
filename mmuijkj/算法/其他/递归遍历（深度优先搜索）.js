// 递归遍历（深度优先搜索）

// 定义二叉树节点构造函数
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function getLeafNodes(root) {
  const result = [];
  function dfs(node) {
    if (node === null) {
      return;
    }
    // 如果当前节点的左右子节点都为空，说明是叶子节点，将其值加入结果数组
    if (node.left === null && node.right === null) {
      result.push(node.val);
      return;
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return result;
}

// 示例用法
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);
console.log(getLeafNodes(root));
