
typeof
instanceof
Object.prototype.toString.call()

const type = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}


typeof：不能正确判断null、Array，都会判断成object
原理：不同的对象在底层都表示为二进制，在Javascript中二进制低三位存储其类型信息。
000: 对象
001： 整数
010: 浮点数
100：字符串
110： 布尔
