// Given s = "leetcode", return "leotcede".
const reverseVowels = (s) => {
  let i = 0;
  let j = s.length - 1;
  let result = s;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  while (i <= j) {
    let charI = s[i];
    let charJ = s[j];
    console.log(charI, charJ);
    if (!vowels.includes(charI)) {
      i += 1; // 左指针向右移动
    } else if (!vowels.includes(charJ)) {
      j -= 1; // 右指针向左移动
    } else {
      // 交换两个元音字符
      result[i] = charJ;
      result[j] = charI;
      i += 1;
      j -= 1;
    }
  }
  return result;
};

let r = reverseVowels("leetcode");
console.log("r", r, r === "leotcede");
