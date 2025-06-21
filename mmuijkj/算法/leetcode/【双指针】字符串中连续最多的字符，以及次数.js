// 字符串中连续最多的字符，以及次数

function findCountinuousChar(str) {
  if (str.length === 0) {
    return { char: "", length: 0 };
  }

  let maxChar = str[0]; // 记录当前出现次数最多的连续字符，初始化为第一个字符
  let maxLength = 1; // 记录当前出现次数最多的连续字符的长度，初始化为1
  let currentLength = 1; // 临时记录当前正在统计的连续字符长度，初始化为1
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentLength++; // 当前字符和前一个字符相同，增加当前长度
      if (currentLength > maxLength) {
        // 如果当前连续字符长度大于最大值，更新最大值
        maxLength = currentLength;
        maxChar = str[i];
      }
    } else {
      currentLength = 1; // 当前字符和前一个字符不相同，重置当前长度
    }
  }

  return { char: maxChar, length: maxLength };
}

const str = "aaabbbcccbb";
const result = findCountinuousChar(str);
console.log(result);
