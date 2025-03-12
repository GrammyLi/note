(1) Base64 将图片转成Base64的图片
 - 将图片转成 Base64 的图片，其实是将图片信息集成到了 css 文件中，css 文件是提前加载的，不会单独加载图片从而实现预加载
 - fileLoader 将 ( 图片 ) 打包到文件夹中，并将 ( 图片地址 ) 返回回来
 - urlLoader 转 Base64 的图片， urlLoader 具有 fileLoader 的功能外， 还可以通过 ( option.limit ) 来指定一个 ( 值 )，当 ( 图片大小 ) 小于该阈值时，会将图片转成 ( Base64 ) 的图片
   - 优点: 将图片转成 Base64 的图片，其实是将图片信息集成到了 css 文件中，css 文件是提前加载的，不会单独加载图片从而实现预加载。
   - 缺点: Base64 图片，会增加 css 文件的大小，增加首屏渲染的时间
   - 扩展: 如何实现图片预加载 https://juejin.cn/post/6893681741240909832

(2) 使用js代码对图片进行预加载

(3) prefetch
- 预提取
- 浏览器在空闲时间预先加载资源，真正使用时直接从浏览器缓存中快速获取
-  <link rel="prefetch" href="static/img/....png">

(4) preload
- 预加载
- <link rel="preload" as="font" href="<%= require('/assets/fonts/....otf') %>" crossorigin>

扩展
- webpack插件 ( preload-webpack-plugin ) 可以自动实现以上的 preload和prefetch，可以在vue和react项目中使用
- 链接 https://juejin.cn/post/6893681741240909832#heading-6
