（1）虚拟 DOM（Virtual DOM）原理：
当页面状态发生变化时，虚拟 DOM 会以 JavaScript 对象的形式进行更新，而不是直接操作真实的 DOM。
更新后的虚拟 DOM 会与旧的虚拟 DOM 进行比较，找出差异（Diffing），然后只针对差异部分来更新真实的 DOM。
使用合适的算法进行差异比较，可以最小化对真实 DOM 的操作次数，从而提高性能。

（2）用处：
性能优化：通过减少对真实 DOM 的操作次数，可以提高页面渲染的效率。相比直接操作真实 DOM，虚拟 DOM 可以批量处理 DOM 更新，减少浏览器的重排和重绘次数。
跨平台开发：虚拟 DOM 是基于 JavaScript 对象的抽象表示，因此可以在不同的平台上使用相同的代码逻辑进行开发，例如 Web、移动应用、桌面应用等。
组件化开发：虚拟 DOM 配合组件化开发可以提高代码的可维护性和复用性，使开发过程更加灵活和高效。


16.手撕dom树的高度
JavaScript中获取DOM元素宽度和高度的常用API - 掘金 (juejin.cn)
17.手撕dom树两节点最近公共祖先元素
只找到类似的力扣题：236. 二叉树的最近公共祖先 - 力扣（LeetCode）
18.手撕三数之和

作者：慢慢robber
链接：https://juejin.cn/post/7371340419342008360
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


虚拟DOM (Virtual DOM) 是一种编程概念，它通过使用 JavaScript 对象来表示DOM结构，以实现更高效的DOM操作。虚拟DOM本质上是对真实DOM的一种抽象，是一种轻量级的描述。

主要优点包括：

提高性能：通过减少直接操作真实DOM的次数，提升性能。虚拟DOM会在内存中计算出最小的变更，然后批量更新真实DOM。
跨平台：虚拟DOM的实现不依赖于浏览器环境，可以用于服务端渲染，甚至是移动端应用开发（如React Native）。
可预测性：通过统一的更新机制（如React中的diff算法），可以确保应用的状态更新是可预测和一致的。
虚拟DOM的使用通常包括以下几个步骤：

创建虚拟DOM树。
当状态发生变化时，创建新的虚拟DOM树。
比较新旧虚拟DOM树，找出差异（diff）。
将这些差异应用到真实DOM。
例如，React使用React.createElement来创建虚拟DOM节点，然后通过ReactDOM.render将其渲染到真实DOM中。


什么是 virtual DOM，它的引入带了什么好处
虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种 GUI。

vdom 把渲染过程抽象化了，从而使得组件的抽象能力也得到提升，并且可以适配 DOM 以外的渲染目标。

Virtual DOM 在牺牲(牺牲很关键)部分性能的前提下，增加了可维护性，这也是很多框架的通性。 实现了对 DOM 的集中化操作，在数据改变时先对虚拟 DOM 进行修改，再反映到真实的 DOM中，用最小的代价来更新DOM，提高效率(提升效率要想想是跟哪个阶段比提升了效率，别只记住了这一条)。

打开了函数式 UI 编程的大门。

可以渲染到 DOM 以外的端，使得框架跨平台，比如 ReactNative，React VR 等。

可以更好的实现 SSR，同构渲染等。这条其实是跟上面一条差不多的。

组件的高度抽象化


虚拟 DOM 的缺点

首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，会比 innerHTML 插入慢。
虚拟 DOM 需要在内存中的维护一份 DOM 的副本(更上面一条其实也差不多，上面一条是从速度上，这条是空间上)。
如果虚拟 DOM 大量更改，这是合适的。但是单一的，频繁的更新的话，虚拟 DOM 将会花费更多的时间处理计算的工作。所以，如果你有一个DOM 节点相对较少页面，用虚拟 DOM，它实际上有可能会更慢。但对于大多数单页面应用，这应该都会更快。