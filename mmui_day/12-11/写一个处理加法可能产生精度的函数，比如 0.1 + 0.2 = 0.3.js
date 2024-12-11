// 笔试题：写一个处理加法可能产生精度的函数，比如 0.1 + 0.2 = 0.3
// 思路：对于浮点数在底层处理是有问题的，
// 所以目的就是想办法将所以的浮点数转化为整数进行处理，
// 同时乘以一个倍数(A)，然后加起来后再除以这个倍数(A)，
// 这个倍数应该是两个数中最小的那个数的倍数，比如 0.1 + 0.02 ,
// 那么应该同时乘以 100，变为 10 + 2，
// 然后再将值除以 100

function add(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  const decimalLen1 = (num1Str.split(".")[1] || "").length;
  const decimalLen2 = (num2Str.split(".")[1] || "").length;
  const base = Math.pow(10, Math.max(decimalLen1, decimalLen2));
  return (num1 * base + num2 * base) / base;
}

// 示例用法
const result = add(0.1, 0.2);
console.log(result);
