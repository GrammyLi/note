const s = "3[a]2[b1[c]]ef";
function change(str) {
  let stack = [];
  let currentStr = ""; // 目前累积到的字符串
  let currentNum = 0; // 当前项重复次数
  for (let s of str) {
    if (!isNaN(s)) {
      currentNum = currentNum * 10 + s;
    } else if (s === "[") {
      // 遇到[,先保存以前累积的字符串,和下一次的重复次数
      stack.push(currentStr);
      stack.push(currentNum);
      currentNum = 0;
      currentStr = "";
    } else if (s === "]") {
      // 遇到],弹出以前累积的字符串和,下一次重复次数,拼接
      const prevNum = stack.pop();
      const prevStr = stack.pop();
      currentStr = prevStr + currentStr.repeat(prevNum);
    } else {
      currentStr += s;
    }
  }
  return currentStr;
}

console.log(change(s));
