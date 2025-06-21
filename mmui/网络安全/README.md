// 常见的 web 前端攻击方式有哪些？
1、xss 跨站请求攻击 (上传文件脚本、输入框里面内容)

发表博客嵌入<sscript></sscript>,获取 cookie 发送到我的服务器，（服务器配合跨域）
解决办法：替换特殊字符

CSP 是一种浏览器安全机制，通过在服务器端设置 HTTP 头或者在 HTML 页面的<meta>标签中定义策略，来限制页面可以加载的资源（如脚本、样式表、图片等）的来源。这样可以防止攻击者注入外部恶意脚本

示例：在服务器端（以 Node.js 为例），使用 helmet 中间件来设置 CSP。首先安装 helmet（npm install helmet），然后在代码中使用

```js
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted - scripts - domain.com"],
    },
  })
);
```

在这个例子中，defaultSrc 设置为'self'，表示页面默认只能加载来自自身域名的资源。scriptSrc 除了允许自身域名，还允许从 trusted - scripts - domain.com 加载脚本，这样可以在一定程度上控制脚本的来源，防止恶意脚本注入。

使用 HTTP - Only Cookies

原理：将 Cookies 标记为 HTTP - Only，这样浏览器的 JavaScript 脚本就无法访问这些 Cookies，从而防止攻击者通过 XSS 攻击获取用户的登录凭证等敏感信息。

示例：在服务器端（以 Node.js 的 express - session 为例）设置 httpOnly 属性为 true：

```js
const session = require("express - session");
app.use(
  session({
    secret: "your - secret - key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
    },
  })
);
```

2、xsrf 跨站请求伪造
你在购物、看中某个商品，商品 id 是 100，付费接口是 xxx/pay?id=100,但没有任何验证、我是攻击者、我看中了一个商品，id 是 200、我向你发送一封电子邮件、标题很吸引人。
但是邮件正文隐藏着<ing src="xxx/pay?id=200"></ing>,你一查看邮件，就帮我购买了 id 是 200 的商品

解决办法：使用 post 接口，增加验证，例如密码、短信验证码、指纹
