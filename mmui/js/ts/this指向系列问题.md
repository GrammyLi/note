全局变量：作为普通函数执行时，this指向window。
对象使用自身方法：当函数作为对象的方法被调用时，this就会指向该对象。
构造器调用，：this指向返回的这个对象。
箭头函数 ：如果有嵌套的情况，则this绑定到最近的一层对象上。
基于Function.prototype上的 apply call 和 bind 调用模式：这三个方法都可以显示的指定调用函数的 this 指向。apply接收参数的是数组，call接受参数列表， bind方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。 



this的不同应用场景它的取值都是取决于是谁调用了它,如果在箭头函数中,this是不存在的,它就会向上寻找

使用call , bind , apply方法可以修改this


function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
}

const person = { name: 'Alice' };

greet.call(person, 'Bob'); // 输出：Hello, Bob! My name is Alice.
greet.apply(person, ['Bob']); // 输出：Hello, Bob! My name is Alice.

