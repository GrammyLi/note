function A() {}

var a = new A();

console.log(a.__proto__.__proto__);
//  a.__proto__   为 A.prooprtye
// a.__proto__.__proto__
// A.prooprtye.__proto__   ====> Object.prooprtye

console.log(typeof Object); //  object

const a = 2;
const obj = {
  a: 1,
  fn: () => {
    return this.a;
  },
};

const fn = obj.fn;

console.log(obj.fn()); //  obj => 1

console.log(fn()); // window => 2

console.log(obj.fn.call(null)); // 2
