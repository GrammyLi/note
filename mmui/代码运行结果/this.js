// - 6789 0 14
// - 如果开启 "use strict"，则会报错，因为严格模式下 this 指向 window 就会报错
var count = 10;
function foo(num) {
  // "use strict";
  var count = 20;
  console.log("foo: " + num); // 6789
  this.count++;
}
foo.count = 0;
for (var i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i); // 6789
  }
}
console.log(foo.count); // 0
console.log(count); // 14
