- 查找缓存
- DNS 解析 域名 -> IP 地址
- 建立 TCP 连接，三次握手
- HTTP 请求
- 服务器响应请求并返回结果
- 关闭 TCP 连接，四次挥手
- 浏览器渲染
- 构建 DOM 树
- 构建 CSS 规则树
- 合并生成 render 树
- 遇到<script>则暂停渲染，优先加载并执行 JS 代码，完成再继续
- 布局-绘制

上面是 html 当解析字符串 script 字段的时候，同理请求，后端响应数据
当然响应的肯定是 js 文件，那么要做 tokenier 操作，将 code 字符串转 ast, 然后做 parse 操作 将 ast 转响应函数变量等，并执行

强制缓存失效->携带缓存标识向服务器发起请求->返回 304，协商缓存生效-协商缓存失效，返回 200 和请求结果

-
- 1、加载资源的形式
- html、媒体文件、图片视频、js、css
-
- 2、加载资源的过程
- dns 解析：域名=>ip 地址
- 浏览器根据 IP 地址向服务器发起 http 请求
- 服务器处理 http 请求，并返回给浏览器
- 3、渲染过程
- 根据 html 代码生成 DOM Tree
- 根据 css 代码生成 CSSOM
- 将 DOM Tree 和 CSSOM 整合成 Render Tree
- 根据 Render Tree 渲染页面
- 遇到<script>则暂停渲染，优先加载并执行 js 代码，完成再继续



https://chat.deepseek.com/a/chat/s/604b90bf-f8f9-403e-a9a4-15eb38877d74
