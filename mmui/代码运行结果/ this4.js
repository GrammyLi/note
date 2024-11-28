// this
var d = 1000;
const obj = {
  d: 10,
  e: function () {
    console.log(this.d); // this -> obj
  },
  f: () => {
    console.log(this.d); // this -> window
  },
};
obj.e();
obj.f();
