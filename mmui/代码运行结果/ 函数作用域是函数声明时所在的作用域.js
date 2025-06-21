var x = 100;
function c(
  x = 1,
  y = function () {
    // 函数作用域是函数声明时所在的作用域，在 ( 执行上下文中 -> x是1 )
    return x + 1;
  }
) {
  var x = 5;
  return y();
}
const res5 = c();
console.log("res5", res5); // 2

const res6 = typeof Function.prototype === "function"; // true
console.log("res6", res6);
