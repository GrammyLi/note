HTTP 3.0
5.1
QUIC 协议
- HTTP3.0 的核心是 QUIC (读音 quick - quick 是快的意思) 协议，由 Google 在 2015 年提出
- QUIC 基于输层 UDP 上的协议，又取了 TCP 中的精华，实现了即快又可靠的协议
5.2
HTTP3.0 优点 ( QUIC 协议针对基于 TCP 和 TLS 的 HTTP2.0 协议解决了下面的问题 )
- 减少了 TCP 三次握手及 TLS 握手时间
- 多路复用丢包的线头阻塞问题
- 优化重传策略

// ----------------------------------------------------------------------------------------
// 4
React.memo 和 React.PureComponent 的区别 ？
- 相同点: 都是浅比较
- 不同点:
- 1
- React.memo ----------- 只检查 props ------------- 用于 function 函数组件中
- React.PureComponent -- 检查 props 和 state ------ 只能用于 class 组件中
- React.memo(MyComponent, areEqual)

React.PureComponent 实现原理
- 特点:
- 浅比较: React.PureComponent 是通过 ( shouldComponentUpdate ) 对 props 和 state 做了一层 ( ===浅比较 )
- 扩展
- 问题: 什么是浅比较？
- 回答: ( 浅比较 ) 又称 ( 引用相等 )，即 ( 等号两边是不是同一个对象的引用 )，即 ( === )
- 扩展
- 问题: === 和 Object.is() 的区别？
- 回答：
- 基本一样，但有两个区别
- +0-0: 【 Object.is(+0, -0)是 false 】 【 +0===-0 是 true 】
- NaN: 【 Object.is(NaN, NaN)是 true 】【 NaN===NaN 是 false 】

// 6.1
// 问题1
- 问题: Map 和 WeakMap 的区别？
- 回答:
 - 1. key
       - Map的key可以是 - 任意的数据类型
       - 而WeakMap的key - 只能是对象(null除外)
 - 2. 弱引用
       - 键名引用的对象 是 弱引用，删除对象key后，weakMap的引用关系不在了，该 ( 键值对 ) 会被垃圾回收机制回收
       - WeakMap的键名所指向的对象，不计入垃圾回收机制
 - 3. WeakMap没有 遍历操作 和 清空操作
       - 不能遍历: weakMap不存在 keys() values() entries() size() 属性
       - 不能清空: weakMap不存在 clear()
       - 因为:
         - 因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关
         - 这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名

问题2
- 问题: 强引用 和 弱引用
- 回答:
 - 强引用: const a = {}; new Map(a, 111); ---- map 和 a 指针指向了同一个堆地址，因为是 ( 强引用 )，引用计数为 ( 2 )，删除a后，map中的a仍然被引用，不会被垃圾回收机制回收
 - 弱引用: const a = {}. new WeakMap(a, 111) - weakMap 和 a 执行虽然都指向同一个堆地址，因为是 ( 弱引用 )，引用计数为 ( 1 )，删除a后，引用计数为0，会被垃圾回收机制回收
 - 资料: https://juejin.cn/post/6993101968545677319#heading-24

应用
1. DOM 节点元数据
2. 部署私有属性
3. 数据缓存: 当我们需要在不修改原有对象的情况下储存某些属性等，而又不想管理这些数据时，可以使用WeakMap

let obj_key = { name: "woow_wu7" };
const str_key = "string";

const map = new Map();
map.set(obj_key, '{ name: "woow_wu7" }');
map.set(str_key, "string");
console.log("map", map);

const weakMap = new WeakMap();
weakMap.set(obj_key, '{ name: "woow_wu7" }');
// weakMap.set(str_key, "string"); // Uncaught TypeError: Invalid value used as weak map key
console.log("weakMap", weakMap);



 // 变量提升
      // - 变量名已经存在，略过变量的声明
      // - 扩展
      //  - 1. 形参 > 函数声明 > 变量声明
      //  - 2. 函数名已经存在，新的覆盖旧的
      //  - 3. 变量名已经存在，直接略过变量的声明
      var a = 11;
      var a;
      console.log(a); // 11
      // 相当于
      // var a = undefined;
      // // var a = undefined; // 变量名已经存在，直接略过变量的声明
      // a = 11;
      // console.log(a);

      // ---------------------------------------------------------------------------------------------------------------
      // 2
      clientWidth
      - clientWidth = width + padding
      --- div{width: 100px; padding: 20px; border: 20px solid red; margin: 20px}
      --- clientWidth = 100 + 20*2 = 140px;



// suspense
      // - 显示 <Spinner> 组件直至 OtherComponent 加载完成
      <React.Suspense fallback={<Spinner />}>
        <OtherComponent />
      </React.Suspense>;


class B {
      constructor() {
        this.attr = 1; // 实例属性，同名
      }
      attr = () => console.log(2); // 实例属性的另一种写法，同名
      attr3 = () => console.log(3);
    }
    const b = new B();
    console.log(b.attr); // 1
    console.log(b.attr3); // () => console.log(3)



      // 数字相加
      // - 存在问题: 大数字存在溢出，计算不精确
      // - 思路:
      //  - 1. BigInt
      //  - 2. 转成字符串，每个位相加

## 为什么不直接操作虚拟 dom 若直接确定修改真实 dom 会不会比虚拟 dom 快
1. 减少重排与重绘: 直接修改真实 DOM 可能导致不必要的重排（layout）和重绘（paint）虚拟 DOM 通过批量计算差异（diff 算法），仅对必要的部分进行最小化的真实 DOM 更新，从而减少重排和重绘
2. 批量更新:拟 DOM 允许你在一个批次中累积多个状态变化，然后一次性应用到真实 DOM 上，这样可以减少与 DOM 交互的次数，提高效率。
3. 计算效率：虚拟 DOM 是轻量级的 JavaScript 对象结构，比真实的 DOM 树操作更高效。修改 JavaScript 对象的速度远快于修改真实 DOM


## https 中 TLS（SSL） 具体是怎么加密的?

HTTPS 中的TLS加密，就是在客户端与服务器建立连接时，通过 TLS 握手协议安全地协商出一个对称加密密钥。这个过程中，服务器会提供一个证书证明其身份，客户端验证证书后，使用证书中的公钥加密并发送一个对称密钥给服务器；服务器用私钥解密得到该对称密钥。之后通过这个共享的对称密钥进行数据传输

对称密钥：加密和解密过程使用相同的密钥
非对称密钥：包含一对密钥：公钥（Public Key）和私钥（Private Key） 公钥用于加密 私钥用于解密
会话密钥：在一次会话或交流中临时使用的对称密钥



大型文件和多文件上传如何实现

【大型文件上传】


整体过程：定义切片原则（Math.ceil取整） ，利用file.slice进行切片，将切片的整体hash名、文件以对象的形式添加到切片数组中。循环遍历这个数组调接口进行文件上传，当全部文件上传后调用接口合并上传的文件。
获取文件的hash值和后缀：利用FileReader的readAsArrayBuffer方法获取文件的buffer数据，利用spark-md5的ppendChild方法获取hash值（SparkMD5.ArrayBuffer( ) ）文件名则为hash值与后缀的拼接
断点续传：定义数组用来接收已经上传的片段。在上传函数中进行判断，如果已上传的数组中包含切片的hash名则调用完成的函数（进度条样式+调用接口合并切片，传值:hash和总数量） 并return

作者：sevenBoy
链接：https://juejin.cn/post/7387550356375044106
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

 
# 2 为什么 defineProperty 不可以监听数组下标的变化 为什么实际应用中还可以监听到数组的增删？
1. 为什么 defineProperty 不可以监听数组下标的变化？
当通过arr[0]修改元素时 不会触发 Object.definePProperty()的 setter，因为Object.defineProperty() 是针对对象的属性进行设置的，当修改数组的一个元素时 其实是在修改数组对象的一个内部状态 而不是修改一个通过 Object.defineProperty() 定义的属性
2. 为什么实际应用中还可以监听到数组的增删？
虽然 Object.defineProperty() 无法直接监听数组元素的变化，但可以通过数组实例上定义的方法实现增减操作。例如，Vue 通过重写数组的 push、pop、shift、unshift、splice、sort、reverse（七个变异方法）来触发视图更新

作者：sevenBoy
链接：https://juejin.cn/post/7387622202433110025
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

路由模式 hash 和 history 是基于什么开发的？

1. hash 模式：
基于 URL 中的 hash(#号及其后面部分)来实现路由，当 hash 值变化时 浏览器不会向服务器发送请求 而是通过监听 hashChange 事件 监听 hash 的变化 再通过 dom 操作来更新视图
2. history 模式：
基于 HTML5 History API 的 pushState() 和 replaceState() 方法来修改 URL

浏览器的渲染流程是怎样的

DNS 查询：浏览器首先检查 URL，以确定要请求的域名所对应的 IP 地址。
建立 TCP 链接
发送 HTTP 请求
等待服务器响应
渲染内容：

处理 HTML 构建 DOM 树
处理 CSS 构建 CSSOM
构建渲染树（只包含需要显示的节点和这些节点的样式信息（不包括如<head>、display:none 等不可见元素）
布局绘制


分层、分块与光栅化

分层：浏览器会将渲染树的节点进行分层处理 层中某一节点发生改变时 只需要重绘和合成该层就可以
分块：合成线程将每个图层分为多个小区域（块） 以便并行处理
光栅化：将图层转换为位图形式的图像（合成线程交给 GPU 进程进行光栅化操作）


合成显示：GPU 将光栅化后的位图图像合成到屏幕上

作者：sevenBoy
链接：https://juejin.cn/post/7387622202433110025
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


作用：浏览器为了保护用户数据安全 防止恶意网站窃取数据而实施的一种安全策略
通过限制来自不同源的“文档”或“脚本”对当前文档的读写 该源指协议、域名、端口号均一致
目的：

防止跨站脚本攻击(XSS)
保护隐私：防止一个网站读取另一个网站的数据
避免数据篡改：避免一个网站修改另一个网站的数据

作者：sevenBoy
链接：https://juejin.cn/post/7387622202433110025
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


9 vite 为什么比 webpack 快?
vite 是基于浏览器原生的 ESM（ES Modules）开发的 而 webpack 是通过打包来模拟 ESM
vite 允许在服务器端按需编译和提供源码 避免了全量打包
Webpack 在开发过程中会进行完整的依赖分析和打包 导致了启动速度相对较慢


