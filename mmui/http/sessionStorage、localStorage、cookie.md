（1）存储大小：cookie一般不超过4k，sessionStorage、localStorage 5M或者更大
（2）数据有效期：cookie若没设置时间关闭浏览器cookie失效，若设置了时间cookie就会存放在硬盘里过期才失效，
sessionStorage 关闭页面或者浏览器就被清除，localStorage 永久有效除非手动清除；

（3）作用域：cookie、localStorage 同源窗口共享 ，sessionStorage在同一浏览器窗口是共享的；
（4）通信：cookie传递于服务器和浏览器之间，localStorage、sessionStorage仅在浏览器保存


浏览器读取缓存的顺序：memory –> disk。

from memory cache 内存缓存
特点：将编译解析后的文件（如：js 和图片）存在该进程的内存中，方便下次快速读取，进程关闭，内存清空。


from disk cache 硬盘缓存
特点：需要对该缓存存放的硬盘文件进行 I/O 操作，然后重新解析内容（如：css），读取复杂，速度比内存缓存慢。

sessionStorage： memory cache
localStorage: disk cache




localStorage生命周期是永久除非自主清除 sessionStorage生命周期为当前窗口或标签页，关闭窗口或标签页则会清除数据

他们均只能存储字符串类型的对象

不同浏览器无法共享localStorage或sessionStorage中的信息。相同浏览器的不同页面间可以共享相同的 localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。这里需要注意的是，页面及标 签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的。 https://www.php.cn/faq/463215.html


Cookie 属性

Domain
Path
Expire/MaxAge
HttpOnly: 是否允许被 JavaScript 操作
Secure: 只能在 HTTPS 连接中配置
SameSite

如果没有 maxAge，则 cookie 的有效时间为会话时间。

## SameSite Cookie 有哪些值，是如何预防 CSRF 攻击的
None: 任何情况下都会向第三方网站请求发送 Cookie
Lax: 只有导航到第三方网站的 Get 链接会发送 Cookie，跨域的图片、iframe、form表单都不会发送 Cookie
Strict: 任何情况下都不会向第三方网站请求发送Cookie
目前，主流浏览器 Same-Site 的默认值为 Lax，而在以前是 None，将会预防大部分 CSRF 攻击，如果需要手动指定 Same-Site 为 None，需要指定 Cookie 属性 Secure，即在 https 下发送
