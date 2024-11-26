const log = console.log.bind(console);

const ensure = function (condition, message) {
  // 在条件不成立的时候, 输出 message
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 有序数组的 Two Sum
/**

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

题目描述：在有序数组中找出两个数，使它们的和为 target。
 */

const twoSum = (numbers, target) => {
  // 判断 numbers 是否有
  if (!numbers.length) {
    return null;
  }
  let i = 0;
  let j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return null;
};

const test_twoSum = () => {
  ensure(
    JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([1, 2]),
    "twoSum 1"
  );

  log("*** twoSum 测试成功");
};

// 两数平方和

/**
 * 
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5

 */
// 题目描述：判断一个非负整数是否为两个整数的平方和。

const judgeSquareSum = (target) => {
  let i = 0;
  let j = Math.round(Math.sqrt(target));
  while (i < j) {
    let sum = i * i + j * j;
    if (sum === target) {
      return true;
    } else if (sum < target) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return false;
};

const test_judgeSquareSumm = () => {
  ensure(
    JSON.stringify(judgeSquareSum(5)) === JSON.stringify(true),
    "judgeSquareSum"
  );

  log("*** judgeSquareSum 测试成功");
};

// 3. 反转字符串中的元音字符
// Given s = "leetcode", return "leotcede".

const reverseVowels = (s) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let result = s.split("");
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    let charI = s[i];
    let charJ = s[j];
    if (!vowels.includes(charI)) {
      result[i] = charI;
      i += 1;
    } else if (!vowels.includes(charJ)) {
      result[j] = charJ;
      j -= 1;
    } else {
      result[i] = charJ;
      result[j] = charI;
      i += 1;
      j -= 1;
    }
  }
  return result.join("");
};

const test_reverseVowels = () => {
  ensure(reverseVowels("leetcode") === "leotcede", "reverseVowels");

  log("*** reverseVowels 测试成功");
};

// 4. 判断回文数
const isPalindrome = (num) => {
  let str = num.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

const test_isPalindrome = () => {
  ensure(isPalindrome(121) === true, "isPalindrome 121");
  ensure(isPalindrome(-121) === false, "isPalindrome -121");
  ensure(isPalindrome(10) === false, "isPalindrome 10");
  log("*** isPalindrome 测试成功");
};

const main = () => {
  test_twoSum();
  test_judgeSquareSumm();
  test_reverseVowels();
  test_isPalindrome();
};

main();
