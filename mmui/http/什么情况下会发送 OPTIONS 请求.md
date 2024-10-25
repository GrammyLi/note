当一个请求跨域且不是简单请求时就会发送 OPTIONS 请求

满足以下条件就是一个简单请求:

Method: 请求的方法是 GET、POST 及 HEAD
Header: 请求头是 Content-Type、Accept-Language、Content-Language 等
Content-Type: 请求类型是 application/x-www-form-urlencoded、multipart/form-data 或 text/plain
而在项目中常见的 Content-Type: application/json 及 Authorization: <token> 为典型的非简单请求，在发送请求时往往会带上 Options