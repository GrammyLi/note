const list = [
  { id: 1, value: 1 },
  { id: 2, value: 2, parentId: 1 },
  { id: 3, value: 3, parentId: 1 },
  { id: 4, value: 4, parentId: 2 },
  { id: 5, value: 7, parentId: 4 },
];
const tree = {
  id: 1,
  value: 1,
  children: [
    {
      id: 2,
      value: 2,
      parentId: 1,
      children: [
        {
          id: 4,
          value: 4,
          parentId: 2,
          children: [
            {
              id: 5,
              value: 7,
              parentId: 4,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      value: 3,
      parentId: 1,
      children: [],
    },
  ],
};

function treeToArr(tree) {
  const arr = [];
  function traverse(node, parentId = null) {
    arr.push({
      id: node.id,
      value: node.value,
      parentId: parentId,
    });
    if (node.children && node.children.length) {
      node.children.forEach((item) => {
        // 以父id作为子项的parentId
        traverse(item, node.id);
      });
    }
  }
  traverse(tree);
  return arr;
}

console.log(treeToArr(tree));
