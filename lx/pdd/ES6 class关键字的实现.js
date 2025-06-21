function inheritPrototype(subClass, superClass) {
  // 复制一份父类的原型
  var p = copy(superClass.prototype);
  // 修正构造函数
  p.constructor = subClass;
  // 设置子类原型
  subClass.prototype = p;
}

function Parent(name, id) {
  this.id = id;
  this.name = name;
  this.list = ["a"];
  this.printName = function () {
    console.log(this.name);
  };
}
Parent.prototype.sayName = function () {
  console.log(this.name);
};
function Child(name, id) {
  Parent.call(this, name, id);
  // Parent.apply(this, arguments);
}
inheritPrototype(Child, Parent);
