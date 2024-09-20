前端路由实现的本质是监听 url 变化，实现方式有两种：Hash 模式和 History 模式，无需刷新页面就能重新加载相应的页面。

Hash url 的格式为www.a.com/#/，当#后的哈希值发生变化时，通过 hashchange 事件监听，然后页面跳转。 
 
History url 通过history.pushState和history.replaceState改变 url。 两种模式的区别：

hash 只能改变#后的值，而 history 模式可以随意设置同源 url；
hash 只能添加字符串类的数据，而 history 可以通过 API 添加多种类型的数据；
hash 的历史记录只显示之前的www.a.com而不会显示 hash 值，而 history 的每条记录都会进入到历史记录；
hash 无需后端配置且兼容性好，而 history 需要配置index.html用于匹配不到资源的情况。
