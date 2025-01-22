function numIslands(grid) {
    if (!grid || grid.length === 0) {
      return 0;
    }
  
    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;
  
    function dfs(r, c) {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === "0") {
        return;
      }
  
      // 标记当前陆地为已访问
      grid[r][c] = "0";
  
      // 递归访问上下左右的陆地
      dfs(r - 1, c); // 上
      dfs(r + 1, c); // 下
      dfs(r, c - 1); // 左
      dfs(r, c + 1); // 右
    }
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === "1") {
          islandCount++;
          dfs(r, c); // 标记整个岛屿
        }
      }
    }
  
    return islandCount;
  }
  
  // 测试用例
  const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  
  console.log(numIslands(grid)); // 输出: 1


// 边界检查：如果网格为空，直接返回 0。

// 初始化：获取网格的行数和列数，并初始化岛屿计数器 islandCount。

// DFS 函数：

// 检查当前坐标是否越界或是否为水域（"0"），如果是则返回。

// 将当前陆地标记为已访问（"0"）。

// 递归访问上下左右的陆地。

// 遍历网格：

// 当遇到一个未被访问的陆地（"1"）时，增加岛屿计数器，并调用 DFS 函数标记整个岛屿。

// 返回结果：最终返回岛屿的数量。
// https://leetcode.cn/problems/number-of-islands/description/