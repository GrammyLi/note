HttpOnly 是一个用于增强 Web 应用安全性的 Cookie 属性。当服务器向客户端发送带有 HttpOnly 属性的 Cookie 时，浏览器会将该 Cookie 限制为只能通过 HTTP 或 HTTPS 协议传输，而禁止客户端的 JavaScript 访问该 Cookie。


HttpOnly 的主要作用是防止客户端的恶意脚本（如 XSS 攻击）通过 document.cookie 来获取敏感信息，比如用户的身份认证信息。因为在正常的 Web 应用中，敏感的 Cookie 数据应该仅在与服务器之间的通信中使用，而不应该被客户端的 JavaScript 访问。

使用 HttpOnly 属性可以有效地提高 Web 应用的安全性，防止恶意攻击者利用客户端的漏洞来窃取用户的敏感信息。因此，在开发 Web 应用时，特别是处理用户身份认证等敏感信息时，应该始终使用 HttpOnly 属性来设置 Cookie。
