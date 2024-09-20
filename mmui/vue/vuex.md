action处理异步，mutations修改值，state储存数据，getters处理格式

State（render） => vue component(dispatch) => actions (commit) => mutation (mutate) => state => ....
核心概念：
1，state, 初始化一个Vuex.Store保存所有的组建的公共数据。
2，getters, 所有组建的computed属性。也就是store的计算属性。getters 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
3，Mutations， store中的methods，有两个参数 第一个参数是state, 第二参数是payload自定义参数
4，Actions， 类似于mutations,可以异步操作，mutations不可以
5，Modules Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
