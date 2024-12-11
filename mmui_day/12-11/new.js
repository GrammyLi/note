// new 的执行过程大致如下：

// 创建一个对象
// 将对象的 _ proto_ 指向 构造函数的 prototype
// 将这个对象作为构造函数的 this
// 返回该对象

const _new = (constructor, ...args) => {
  // 步骤一：创建一个空对象
  const obj = {};

  // 步骤二：设置对象的原型链，将对象的 __proto__ 指向构造函数的 prototype
  obj.__proto__ = constructor.prototype;

  // 步骤三：将这个对象作为构造函数的 this，并执行构造函数内部代码
  const result = constructor.apply(obj, args);

  // 步骤四：判断构造函数执行后的返回值类型，如果是对象（包括函数、数组等引用类型），则返回该返回值，否则返回创建的对象 obj
  return result instanceof Object ? result : obj;
};

const _new2 = (constructor, ...args) => {
  // 步骤一：创建一个空对象
  // 步骤二：设置对象的原型链，将对象的 __proto__ 指向构造函数的 prototype

  let obj = Object.create(constructor.prototype);

  // 步骤三：将这个对象作为构造函数的 this，并执行构造函数内部代码
  const result = constructor.apply(obj, args);

  // 步骤四：判断构造函数执行后的返回值类型，如果是对象（包括函数、数组等引用类型），则返回该返回值，否则返回创建的对象 obj
  return result instanceof Object ? result : obj;
};

function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person = _new(Person, "Tom");
person.sayHello();
// 这里 person 就是通过自定义的 myNew 函数模拟 new 操作符创建出来的对象实例，会输出 "Hello, my name is Tom"
