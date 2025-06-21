// 假设 URL 是 http://example.com/?name=John&age=30
const url = "http://example.com/?name=John&age=30";
const urlParams = new URLSearchParams(url.split("?")[1]);

// 获取单个参数
const name = urlParams.get("name"); // John
const age = urlParams.get("age"); // 30

console.log(`Name: ${name}, Age: ${age}`);

function parseQueryParams(url) {
  const queryParams = {};
  const queryString = url.split("?")[1];
  if (queryString) {
    queryString.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      queryParams[key] = decodeURIComponent(value); // 解码参数值
    });
  }
  return queryParams;
}

// 示例
// const url = "http://example.com/?name=John&age=30";
console.log(parseQueryParams(url)); // 输出：{ name: "John", age: "30" }
