function arrayToTree(array) {
  const nodeMap = new Map(); // 创建一个哈希表来存储每个节点
  const tree = [];

  // 遍历数组，创建节点的哈希表
  array.forEach((node) => {
    node.children = []; // 初始化子节点数组
    nodeMap.set(node.id, node); // 存储节点
    if (!node.parentId) {
      tree.push(node); // 如果没有父节点，将其作为根节点添加到树中
    }
  });

  // 遍历数组，根据 parentId 将节点添加到其父节点的 children 数组中
  array.forEach((node) => {
    if (node.parentId) {
      const parentNode = nodeMap.get(node.parentId);
      if (parentNode) {
        parentNode.children.push(node);
      }
    }
  });
  console.log("nodeMap", nodeMap);
  return tree; // 返回根节点组成的数组
}

// 示例数据
const data = [
  { id: 1, parentId: null, name: "Root" },
  { id: 2, parentId: 1, name: "Child 1" },
  { id: 3, parentId: 2, name: "Grandchild 1" },
  { id: 4, parentId: 1, name: "Child 2" },
  { id: 5, parentId: 4, name: "Grandchild 2" },
  { id: 6, parentId: 5, name: "Great-grandchild 1" },
];

// 转换数组为树
const tree = arrayToTree(data);

// 输出树
console.log(tree);
