全局变量：作为普通函数执行时，this 指向 window。
对象使用自身方法：当函数作为对象的方法被调用时，this 就会指向该对象。
构造器调用，：this 指向返回的这个对象。
箭头函数 ：如果有嵌套的情况，则 this 绑定到最近的一层对象上。
基于 Function.prototype 上的 apply call 和 bind 调用模式：这三个方法都可以显示的指定调用函数的 this 指向。apply 接收参数的是数组，call 接受参数列表， bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。

this 的不同应用场景它的取值都是取决于是谁调用了它,如果在箭头函数中,this 是不存在的,它就会向上寻找

使用 call , bind , apply 方法可以修改 this

function greet(name) {
console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: 'Alice' };

greet.call(person, 'Bob'); // 输出：Hello, Bob! My name is Alice.
greet.apply(person, ['Bob']); // 输出：Hello, Bob! My name is Alice.

# 1 this 概念及其绑定规则

- this 可以理解为一个指针, 指向调用函数的对象

- 关于 this 指向一共有四种绑定规则

## 1.1 默认绑定

- 即使指独立函数的直接调用
- 这时候 this 指向全局对象的，在浏览器环境中就是 window
- 在严格模式下，this 的指向就是 undefined

```js
var age = 11;
function foo() {
  console.log(this.age);
}
foo(); // 11
```

## 1.2 隐式绑定

- 当某个对象调用函数时，函数内的 this 指向该对象，当有多个对象调用时，this 永远指向最后调用它的那个对象

```js
function foo() {
  console.log(this.name);
}

let a = {
  name: "aaa",
  foo,
};

let b = {
  name: "bbb",
  obj: a,
};

b.obj.foo(); // a
```

- 隐式绑定有一个大陷阱，便是绑定很容易丢失

```js
function sayHi() {
  console.log("Hello,", this.name);
}
var person = {
  name: "YvetteLau",
  sayHi: sayHi,
};
var name = "Wiliam";
var Hi = person.sayHi;
Hi();
```

- 上面这种情况，函数实际上是直接调用的，this 直接指向全局对象
- 补充一题

```js
function sayHi() {
  console.log("Hello,", this.name);
}
var person1 = {
  name: "YvetteLau",
  sayHi: function () {
    setTimeout(function () {
      console.log("Hello,", this.name);
    });
  },
};
var person2 = {
  name: "Christina",
  sayHi: sayHi,
};
var name = "Wiliam";
person1.sayHi(); // Wiliam
setTimeout(person2.sayHi, 100); // wiliam
setTimeout(function () {
  person2.sayHi();
}, 200); // Christina
```

## 1.3 显示绑定

- call, apply, bind

### call

- call()方法会以给定的 this 值和逐个参数来调用该函数
- 使用方法 fn.call(this, arg1, arg2, ...)

- 手写 call 函数

```js
Function.prototype.call = function (target, ...args) {
  // 首先判断调用call的是否是一个函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 给参数加容错
  // 在非严格模式下 null 和 undefined将会被替换成全局对象，并且将原始值转化为对象
  // js特性 原始值调用方法会自动将其转化为对象
  target = target || window;
  // target是一个对象，只需要在target中设置一个属性fn，使其指向调用call方法的原函数，再调用这个函数fn
  // 这样就相当于 target对象 调用了原函数， 这是利用了this的隐式转化
  target.fn = this;
  let result = target.fn(...args);
  return result;
};
```

### apply

- apply()方法与 call()方法类似，、只不过 call()接收给函数传递的参数是一个个传入，而 apply()是以数组的形式传入

- 手写 apply

```js
Function.prototype.apply = function (target) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  // 判断是否是数组
  if (arguments[1] && !Array.isArray(arguments[1])) {
    throw new TypeError("not array");
  }

  // 容错
  target = target || window;
  // 隐式绑定
  target.fn = this;

  let result = arguments[1] ? target.fn(...arguments[1]) : target.fn();
  return result;
};
```

### 手写 bind

- bing()是应该语法糖，它返回一个新函数，这个新函数会调用原始函数并将其 this 绑定为给定的值
- 并且还可以传入一系列的参数，这些参数会插入调用新函数是传入的参数的前面

- 手写 bind()

```js
Function.prototype.bind = function (target) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  const args = Array.prototype.slice.call(arguments);

  // 记录现在的this所指向的原函数
  const _this = this;
  // 需要绑定的this
  const newThis = args.shift();

  return function (...newArgs) {
    return _this.call(newThis, args, ...newArgs);
  };
};
```

## 1.4 new 绑定

- new 的一个构造函数时的逻辑
- 1 首选创建一个空对象
- 2 重新指定原型链，使新对象能够访问到构造函数的原型
- 3 将函数中的 this 指向这个新创建的对象

- 手写 new

```js
function _new(fn) {
  if (typeof fn !== "function") {
    throw new TypeError("error");
  }
  let target = {};

  const args = Array.prototype.slice.call(arguments, 1);

  // 修改原型链
  target.__proto__ = fn.prototype;
  // 重新绑定this
  let result = fn.apply(target, args);

  return typeof result === "object" ? result : target;
}
```

# 2 this 绑定优先级

new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定

# 3 经典面试题

## 3.1

```js
var a = 10;
var foo = {
  a: 20,
  bar: function () {
    var a = 30;
    return this.a;
  },
};

console.log(
  foo.bar(), // 20
  foo.bar(), // 20
  (foo.bar = foo.bar)(), // 10
  (foo.bar, foo.bar)() // 10
);
```

- 重点是第三个和第四个表达式
- 对于第三个表达式
- 首先执行的是赋值操作，然后调用赋值操作的结果
- 这个赋值操作返回了 foo.bar 函数的引用，但是没有用任何对象绑定信息，于是调用该函数时，它是以独立函数的形式被调用的

- 对于第四个表达式，这是逗号运算符的特性。
- 逗号运算符会对它的每个操作数求值，并返回最后一个操作数的值。在表达式 (foo.bar, foo.bar)() 中，逗号运算符的结果是最后一个 foo.bar，即函数本身。因此，这个表达式等价于：

```js
var temp = foo.bar;
temp();
```

- 当函数 temp 被调用时，它不再是作为 foo 对象的方法调用，而是一个独立函数调用。
- 在这种情况下，this 的默认绑定规则生效，即在非严格模式下指向全局对象，而在严格模式下为 undefined。
- 因此，(foo.bar, foo.bar)() 的调用导致 this 指向全局上下文，而不是 foo。
