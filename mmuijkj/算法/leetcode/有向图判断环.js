// 通过 DFS 遍历图，如果在遍历过程中遇到一个已经在当前递归栈中的节点，则说明图中存在环。

function hasCycle(graph) {
  const n = graph.length; // 节点数量
  const visited = new Array(n).fill(false); // 记录节点是否被访问过
  const recStack = new Array(n).fill(false); // 记录当前递归栈中的节点

  function dfs(node) {
    if (recStack[node]) {
      return true; // 如果节点已经在递归栈中，说明存在环
    }
    if (visited[node]) {
      return false; // 如果节点已经被访问过且不在递归栈中，说明无环
    }

    // 标记当前节点为已访问，并加入递归栈
    visited[node] = true;
    recStack[node] = true;

    // 遍历当前节点的所有邻居
    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) {
        return true; // 如果邻居存在环，返回 true
      }
    }

    // 当前节点处理完毕，移出递归栈
    recStack[node] = false;
    return false;
  }

  // 遍历所有节点
  for (let i = 0; i < n; i++) {
    if (dfs(i)) {
      return true; // 如果发现环，返回 true
    }
  }

  return false; // 没有发现环
}

// 测试用例
const graph = [
  [1], // 节点 0 指向节点 1
  [2], // 节点 1 指向节点 2
  [0], // 节点 2 指向节点 0
];
console.log(hasCycle(graph)); // 输出: true
