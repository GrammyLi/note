const escapeHtml = (str) => {
  const entities = {
    // "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    // '"': "&quot;",
    // "'": "&#39;",
  };
  return str.replace(/[<>]/g, (char) => entities[char]);
};
const extractPContent = (rawContent) => {
// 
  const matches = rawContent.match(/<p[^>]*>([\s\S]*?)<\/p>/g); // 匹配所有 <p> 标签
  if (!matches) {
    return ""; // 如果没有匹配到任何 <p>，返回空数组
  }
  return matches
    .map((match) => {
      const contentMatch = match.match(/<p[^>]*>([\s\S]*?)<\/p>/); // 提取 <p> 内的内容
      if (contentMatch) {
        const rawContent = contentMatch[1].trim(); // 去掉首尾空格
        if (!rawContent) {
          return `<p style='height: 16px;'>${" "}</p>`; // 如果内容为空
        }
        return `<p>${escapeHtml(rawContent)}</p>`; // 转义并包裹 <p>
      }
      return `<p style='height: 16px;'>${" "}</p>`; // 如果没有内容，返回占位 <p>
    })
    .join("");
};

const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>速看！汽车大灯你认识了吗</title>
    </head>
    <body>
        yyyy
        <p>xxxx1</p>
        yyyy
        <p>xxxx3</p>
        <p>xxxx2</p>
        <img width="100%" src="https://vimg-test.yilanvaas.cn/d6d9/20241114/jqdw16v5oxk2l5pkz8x218iwy89el7yn.jpeg" data-design-id="" data-slot-id=4mW5g3Xd5z3A>
        <img width="100%" src="https://vimg-test.yilanvaas.cn/6f94/20241114/nq543x98k2rjo16w0kqr51fjj49lj2zw.jpeg" data-design-id="" data-slot-id=klNjq6NX5QDo>
        <img width="100%" src="https://vimg-test.yilanvaas.cn/2fb4/20241114/205z64mp01el7ky372lyykfqld9pjq3x.jpeg" data-design-id="" data-slot-id=N08jpRKbymKA>
    </body>
</html>
`;

const r = extractPContent(html);
console.log("r", r);

// <p>xxxx1</p><p>xxxx3</p><p>xxxx2</p>

// 期望的是：yyyy<p>xxxx1</p>yyyy<p>xxxx3</p><p>xxxx2</p>
