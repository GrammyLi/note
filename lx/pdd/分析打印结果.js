const temp = {};

class Test {
  a() {}
  b = () => {};
  c = 1;
  d = {};
  e = temp;
  static f = temp;
}

const test1 = new Test();
const test2 = new Test();

console.log(test1.a === test2.a); // true
console.log(test1.b === test2.b); // false
console.log(test1.c === test2.c); // true
console.log(test1.d === test2.d); // false
console.log(test1.e === test2.e); // true
console.log(test1 === test2); // false
console.log(Test.f === Test.f); // true
