MVVM 在使用当中，利用双向绑定技术，使得 Model 变化时，ViewModel 会自动更新，
而 ViewModel 变化时，View 也会自动变化。

vue2:

Vue 使用 Object.defineProperty 遍历和递归对data中的所有属性做数据劫持，把这些 属性 全部转为 getter/setter，当获取的时候会触发getter，设置的时候会触发setter

其他：
compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，
添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己
2、自身必须有一个update()方法
3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。


通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，
最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效
