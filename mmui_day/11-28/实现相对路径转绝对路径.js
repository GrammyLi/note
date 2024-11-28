// 实现 相对路径转 绝对路径
// - 思路: 栈
//  - 将 'a/b/c/.././../' 推入栈
//  - 遇到 ../ 出栈
//  - 遇到 ./ 不做操作
//  - 最后如果栈有剩余，就是 绝对路径
const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};
const simplifyPath = (path) => {
  const stack = []; // 使用栈来存储路径部分
  const parts = path.split("/"); // 按 '/' 切割路径

  for (let part of parts) {
    if (part === "" || part === ".") {
      // 空字符串或 '.' 都不做操作
      continue;
    }
    if (part === "..") {
      // '..' 表示返回上一层目录，出栈
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      // 其他部分路径直接压入栈
      stack.push(part);
    }
  }

  // 拼接栈中的路径部分并返回
  return "/" + stack.join("/");
};

// 测试数据
const testCases = [
  { input: "/a/./b/../../c/", expected: "/c" },
  { input: "/home/../usr//bin/./test", expected: "/usr/bin/test" },
  { input: "/home/./a/../b/", expected: "/b" }, // 修正后的测试用例
  { input: "/a/b/c/.././../", expected: "/a" },
  { input: "/a/./b/./c/", expected: "/a/b/c" },
  { input: "/", expected: "/" },
  { input: "/../", expected: "/" },
  { input: "/a/../../b/", expected: "/b" },
];

// 测试用例验证
testCases.forEach((testCase, index) => {
  const result = simplifyPath(testCase.input);
  ensure(
    result === testCase.expected,
    `测试用例 ${index + 1}: 输入 "${testCase.input}"，期望结果 "${
      testCase.expected
    }"，实际结果 "${result}"`
  );
});

log("*** 所有测试通过");
