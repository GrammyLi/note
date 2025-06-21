var compose = function () {
  // 获取所有传入的函数参数
  var args = arguments;
  // 获取最后一个函数的索引
  var start = args.length - 1;
  // 返回一个新的函数
  return function (x) {
    // 从最后一个函数开始执行
    var i = start;
    // 执行最后一个函数并传入初始值 x
    var result = args[start].call(this, x);
    // 从倒数第二个函数开始，依次执行每个函数
    while (i--) {
      // 将上一个函数的结果作为参数传入当前函数
      result = args[i].call(this, result);
    }
    // 返回最终结果
    return result;
  };
};

// 使用 compose 组合 hello 和 toUpperCase 函数
var greet = compose(hello, toUpperCase);
// 调用组合后的函数并传入参数 'kevin'
console.log(greet("kevin"));
// https://juejin.cn/post/7472664161103118371?searchId=20250221143423B559AC9FD1E9C506343E
