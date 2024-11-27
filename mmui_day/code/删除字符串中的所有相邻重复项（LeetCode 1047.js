/**
 * 
给定一个字符串 s，你需要删除字符串中的所有相邻重复项，使得每个字符只出现一次。

请注意，结果应当返回新的字符串，而不是修改原字符串。


栈的使用：遍历字符串，当遇到相邻重复字符时，弹出栈顶元素表示删除；否则将当前字符入栈。

 */

const log = console.log.bind(console);
const removeDuplicates = (s) => {
  const stack = []; // 初始化栈

  for (let char of s) {
    // 遍历字符串中的每个字符
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      // 如果栈顶元素与当前字符相同
      stack.pop(); // 弹出栈顶元素（删除相邻重复字符）
    } else {
      stack.push(char); // 否则，将当前字符压入栈中
    }
  }

  return stack.join(""); // 将栈中的字符拼接成字符串并返回
};

// 假设我们要处理字符串 "abbaca"。

// 开始遍历字符串：

// 第一个字符 'a'，栈为空，将 'a' 压入栈中：stack = ['a']
// 第二个字符 'b'，栈顶是 'a'，不同，压入栈中：stack = ['a', 'b']
// 第三个字符 'b'，栈顶是 'b'，相同，弹出栈顶：stack = ['a']
// 第四个字符 'a'，栈顶是 'a'，相同，弹出栈顶：stack = []
// 第五个字符 'c'，栈为空，压入栈中：stack = ['c']
// 第六个字符 'a'，栈顶是 'c'，不同，压入栈中：stack = ['c', 'a']
// 遍历结束：

// 最终栈中的内容是 ['c', 'a']，将它们拼接成字符串 "ca"
// 测试用例
const ensure = function (condition, message) {
  if (!condition) {
    console.log("*** 测试失败:", message);
  } else {
    console.log("||| 测试成功");
  }
};

const test_removeDuplicates = () => {
  ensure(removeDuplicates("abbaca") === "ca", "removeDuplicates 'abbaca'");
  ensure(removeDuplicates("abcddcba") === "", "removeDuplicates 'abcddcba'");
  ensure(removeDuplicates("aabccaab") === "", "removeDuplicates 'aabccaab'");
  ensure(removeDuplicates("") === "", "removeDuplicates empty string");
  ensure(removeDuplicates("abcd") === "abcd", "removeDuplicates 'abcd'");

  console.log("*** removeDuplicates 测试成功");
};

// 执行测试
test_removeDuplicates();
