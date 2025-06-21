const ArrayToTree1 = (arr) => {
  const map = {}; // 用于存储节点映射
  const result = []; // 最终的树形结构

  // 初始化每个节点
  arr.forEach((item) => {
    map[item.id] = { ...item, children: [] }; // 每个节点都初始化 `children` 属性
  });

  // 构造树
  arr.forEach((item) => {
    if (item.parentId === 0) {
      result.push(map[item.id]); // 顶层节点直接加入结果
    } else {
      // 非顶层节点加入父节点的 children
      map[item.parentId]?.children.push(map[item.id]);
    }
  });

  return result;
};

const ArrayToTree2 = (arr, parentId = 0) => {
  return arr
    .filter((item) => item.parentId === parentId) // 找到当前父节点的直接子节点
    .map((item) => ({
      ...item,
      children: ArrayToTree2(arr, item.id), // 递归寻找子节点
    }));
};

// https://juejin.cn/post/7450309922795274267?searchId=20241225161811D9EFC2635A9BF181E76A

function ArrayToTree(arr = []) {
  // 遍历查找太慢 使用map
  // 用于id和treeNode的映射
  const tree = new Map();
  let root = null;
  arr.forEach((item) => {
    const { id, name, parentId } = item;
    // 定义tree node 并加入map
    const treeNode = { id, name };
    tree.set(id, treeNode);
    // 找到parentNode并加入到他的children
    const parentNode = tree.get(parentId);
    if (parentNode) {
      if (parentNode.children == null) parentNode.children = [];
      parentNode.children.push(treeNode);
    }
    // 找到根节点
    if (parentId === 0) root = treeNode;
  });
  return root;
}

const r2 = [
  {
    id: 1,
    name: "部门A",
    parentId: 0,
    children: [
      {
        id: 2,
        name: "部门B",
        parentId: 1,
        children: [
          { id: 4, name: "部门D", parentId: 2, children: [] },
          { id: 5, name: "部门E", parentId: 2, children: [] },
        ],
      },
      {
        id: 3,
        name: "部门C",
        parentId: 1,
        children: [{ id: 6, name: "部门F", parentId: 3, children: [] }],
      },
    ],
  },
];

const TreeToArray1 = (tree) => {
  const result = []; // 扁平化的结果

  const traverse = (nodes, parentId) => {
    nodes.forEach((node) => {
      const { children, ...rest } = node; // 取出 children，其余加入结果
      result.push({ ...rest, parentId }); // 添加 parentId 信息

      if (children && children.length > 0) {
        traverse(children, node.id); // 递归遍历子节点
      }
    });
  };

  traverse(tree, 0); // 从根节点开始遍历，根节点 parentId 为 0
  return result;
};

const TreeToArray2 = (tree) => {
  return tree.flatMap((node) => {
    const { children, ...rest } = node; // 拆分出 children
    return [rest, ...TreeToArray(children || [])]; // 递归处理子节点
  });
};

// 看是深度优先还是广度优先
function TreeToArray(root) {
  // 用于id和treeNode的映射
  //遍历树查找太慢 使用map
  const nodeToParent = new Map();
  const arr = [];
  // 广度优先遍历 使用队列 queue
  const queue = [];
  queue.unshift(root); //根节点入队
  while (queue.length > 0) {
    const curNode = queue.pop(); //出队
    if (curNode == null) break;
    const { id, name, children = [] } = curNode;
    // 创建数组item，并push
    const parentNode = nodeToParent.get(curNode);
    const parentId = parentNode?.id || 0;
    const item = { id, name, parentId };
    arr.push(item);
    // 自节点入队
    children.forEach((child) => {
      // 映射父节点
      nodeToParent.set(child, curNode);
      // 入队
      queue.unshift(child);
    });
  }

  return arr;
}

const arr = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 1 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 2 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
];

const tree = ArrayToTree(arr);
console.log(JSON.stringify(tree));
const res = TreeToArray(JSON.parse(JSON.stringify(tree)));
console.log(res);

let r = [
  {
    id: 1,
    name: "部门A",
    parentId: 0,
    children: [
      {
        id: 2,
        name: "部门B",
        parentId: 1,
        children: [
          { id: 4, name: "部门D", parentId: 2, children: [] },
          { id: 5, name: "部门E", parentId: 2, children: [] },
        ],
      },
      {
        id: 3,
        name: "部门C",
        parentId: 1,
        children: [{ id: 6, name: "部门F", parentId: 3, children: [] }],
      },
    ],
  },
];

function flattenTree(tree) {
  return tree.reduce((acc, item) => {
    acc.push({ id: item.id, name: item.name, parentId: item.parentId });
    if (item.children) {
      acc = acc.concat(flattenTree(item.children));
    }
    return acc;
  }, []);
}

const flatArray = flattenTree(tree);
console.log(flatArray);
