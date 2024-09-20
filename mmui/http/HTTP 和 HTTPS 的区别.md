HTTPS 中，使用传输层安全性(TLS)或安全套接字层(SSL)对通信协议进行加密。
HTTPS结合了对称加密和非对称加密的特点，在客户端和服务端第一次通信时候，采用非对称加密的形式完成随机密钥的传输，在后面的请求中，采用首次生成的密钥进行对称加密

https://github.com/liuyib/note/blob/master/%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3/HTTP(S)%20%E7%9B%B8%E5%85%B3/%E6%B7%B1%E5%85%A5%E6%8E%A2%E7%A9%B6%20TLS%20%E5%8D%8F%E8%AE%AE.md

端口：http 80， https 443
安全：http 明文传输， https 加密传输，使用传输层安全性(TLS)或安全套接字层(SSL)对通信协议进行加密。
大小：http 肯定小一点啊，https 都多了一层ssl 或者 tsl
费用：http 肯定小一点啊，https 都要提供一个 网站证书
