基本类型(值类型)：Number、String、Boolean、Symbol,null,undefined       栈内存储
引用类型(复杂数据类型)：Object、Function、Array                         堆内存储

const a = {}
a.key = '123'
// a = {b: 3}

原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，
将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。


值类型和引用类型的区别
值类型和引用类型在JavaScript中的主要区别在于它们的存储方式和操作方式。
存储方式：
值类型（基本数据类型）：变量存储的是简单的数据段，存储的是具体的值，是轻量级的数据存储方式。例如，Number、String、Boolean、Null、Undefined以及Symbol（ES6新增）等都是值类型。
引用类型：引用类型的值是由多个值构成的对象，引用类型的变量存储的是对象引用地址。引用类型是重量的数据存储方式，分配在堆内存，频繁创建对象有损性能。在JavaScript中，所有的对象（包括数组和函数）都是引用类型。
操作方式：
值类型：对于值类型的变量，赋值操作实际上是创建了一个新的内存空间，并将新值存储在这个新的内存空间中。因此，对一个值类型变量进行修改，不会影响到另一个同类型的变量。
引用类型：引用类型的变量存储的是对象的引用地址，而不是实际的对象。因此，当两个引用类型的变量指向同一个对象时，对其中一个变量进行的修改会影响到另一个变量。这是因为它们实际上都是指向同一个内存地址的引用。


var arr = [1, 2, 3];  
console.log(Array.isArray(arr)); // 输出：true

var arr = [1, 2, 3];  
console.log(arr instanceof Array); // 输出：true


var arr = [1, 2, 3];  
console.log(arr.constructor === Array); // 输出：true

var arr = [1, 2, 3];  
console.log(Object.prototype.toString.call(arr) === "[object Array]"); // 输出：true
