// 1
//  1-1
//   1-1-1
//   1-1-2
//  1-2
//   1-2-1
//   1-2-2
function generateStructure(levels, depth = 0, prefix = "") {
  if (levels === 0) return;

  for (let i = 1; i <= 2; i++) {
    const current = prefix + i;
    console.log(" ".repeat(depth) + current);
    generateStructure(levels - 1, depth + 1, current + "-");
  }
}

// 示例
generateStructure(3);

// 输出：
// 1
//  1-1
//   1-1-1
//   1-1-2
//  1-2
//   1-2-1
//   1-2-2
// 2
//  2-1
//   2-1-1
//   2-1-2
//  2-2
//   2-2-1
//   2-2-2
