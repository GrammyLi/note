// this指向问题
// 扩展: this 的使用场景
// - 构造函数中的 this -----------------------> 是指向实例对象
// - 函数和对象方法中的 this ------------------> 在函数调用时确定指向
// - 箭头函数中的 this -----------------------> 没有自己的this，指代的是 ( 箭头函数声明时所在所用域 ) 的 ( 上层作用域中的 this )
// - ( 嵌套 ) 函数声明并且调用在对象的方法中时 ---> 此时 this 取决于 调用类型 ( 直接调用 和 方法调用 )，而不取决于外部函数的上下文；
//    - ( 直接调用: 非严格模式this指向window，严格模式this指向undefined )
//    - ( https://bbs.huaweicloud.com/blogs/330379 )
//    - ( 2-FRONTEND/JS/15-arrow-function/this特殊案例.html )

var name = "123";
var obj = {
  name: "456",
  print: function () {
    console.log(111, this.name); // 456
    function a() {
      console.log(222, this.name);
      // 123，this指向window

      // 注意
      // - 当 ( 函数定义且调用在对象方法的内部 ) 时，此时 ( 函数的上下文 ) 仅取决于 ( 调用类型 )，而 ( 不取决于外部函数的上下文 )
      // - 也就是说此时的函数的this任然取决于内部函数在父函数内部的调用方式

      // 扩展
      // - 调用类型有哪些？
      //  - 默认绑定/直接调用
      //  - 隐式绑定/方法调用
      //  - https://bbs.huaweicloud.com/blogs/330379
    }
    a(); // 这里的调用方式是 直接调用 - this指向 ( 非严格模式指向window ) ( 严格模式指向undefined )
  },
};
obj.print();
