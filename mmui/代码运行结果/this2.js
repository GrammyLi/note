// answers
// - "global a"
// - 'obj a'
// - "global a";
function foo() {
  var a = "foo a";
  console.log(this.a);
}
function doFoo(fn) {
  fn();
}
var obj = { a: "obj a", foo: foo };
var a = "global a";
foo(); // "global a";
obj.foo(); // 'obj a'
doFoo(obj.foo); // "global a";
