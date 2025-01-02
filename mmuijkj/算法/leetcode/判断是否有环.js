function hasCycleAndPath(edges) {
  const graph = {};
  const visited = new Set();
  const pathStack = new Set();

  // 构建图
  edges.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  });

  const dfs = (node, path) => {
    if (pathStack.has(node)) {
      console.log("检测到环:", [...path, node]);
      return true;
    }
    if (visited.has(node)) return false;

    visited.add(node);
    pathStack.add(node);

    for (const neighbor of graph[node] || []) {
      if (dfs(neighbor, [...path, node])) return true;
    }

    pathStack.delete(node);
    return false;
  };

  for (const node in graph) {
    if (dfs(node, [])) return true;
  }
  return false;
}

// 示例
const edges = [
  ["A", "B"],
  ["B", "C"],
  ["C", "A"],
  ["D", "A"],
];
hasCycleAndPath(edges); // 检测到环: [ 'A', 'B', 'C', 'A' ]
