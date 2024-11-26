GC：Garbage Collecation
垃圾收集器会定期（周期性）找出那些不再继续使用的变量，然后释放其内存。


标记清除:只要执行流进入相应的环境，就标记它，离开环境，就标记离开，

function test(){
  var a = 10 ; // 被标记 ，进入环境 
  var b = 20 ; // 被标记 ，进入环境
}
test(); // 执行完毕 之后 a、b 又被标离开环境，被回收。


引用计数 当垃圾回收器下次再运行时，它就会释放那些引用次数为 0 的值所占用的内存。
function test() {
    var a = {};	// a 指向对象的引用次数为 1
    var b = a;	// a 指向对象的引用次数加 1，为 2
    var c = a;	// a 指向对象的引用次数再加 1，为 3
    var b = {};	// a 指向对象的引用次数减 1，为 2
}

循环引用。如果 fn 函数被大量调用，就会造成内存泄露。 在 IE7 与 IE8 上，内存直线上升。
function fn() {
    var a = {};
    var b = {};
    a.pro = b;
    b.pro = a;
}
fn();

https://q.shanyue.tech/fe/js/293

Scavenge（清除）回收机制：

Scavenge是一种针对新生代对象的垃圾回收策略。V8将堆内存分为新生代（young generation）和老生代（old generation）。新生代内存主要用于存储生命周期较短的对象。Scavenge使用的是复制算法（copying algorithm），它将新生代内存进一步分为两个区域：From空间和To空间。垃圾回收时，存活的对象会从From空间复制到To空间，然后清空From空间，这样可以有效地减少内存碎片。
Mark-Sweep（标记-清除）回收机制：

Mark-Sweep主要用于清理老生代对象。当堆内存中对象变得老化，进入老生代后，V8会使用Mark-Sweep算法。该算法分为两个阶段：首先是标记阶段，它遍历堆中的所有对象，并标记出仍然存活的对象；然后是清除阶段，回收那些未被标记的对象的内存。
