const judgeSquareSum = (target) => {
  let i = 0;
  let j = Math.round(Math.sqrt(target));
  console.log("j", j);
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

// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5

const r = judgeSquareSum(5);
console.log("r", r);
