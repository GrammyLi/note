const escapeHtml = (str) => {
  const entities = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return str.replace(/[<>&"'`]/g, (char) => entities[char] || char);
};

const extractBodyContent = (rawContent) => {
  // 匹配 <body> 标签之间的内容
  const bodyMatch = rawContent.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  if (!bodyMatch) {
    return ""; // 如果没有找到 <body> 内容，返回空
  }

  const bodyContent = bodyMatch[1]; // 提取 <body> 标签内的内容

  // 提取 <p> 标签内容并转义
  const matches = bodyContent.split(/(<p[^>]*>[\s\S]*?<\/p>)/g);

  return matches
    .map((segment) => {
      // 如果是 <p> 标签的内容
      if (segment.match(/<p[^>]*>[\s\S]*?<\/p>/)) {
        const contentMatch = segment.match(/<p[^>]*>([\s\S]*?)<\/p>/); // 提取 <p> 标签中的内容
        if (contentMatch) {
          const rawContent = contentMatch[1].trim(); // 去掉内容的首尾空格
          if (!rawContent) {
            return `<p style='height: 16px;'>${" "}</p>`; // 如果内容为空，插入占位符
          }
          return `<p>${escapeHtml(rawContent)}</p>`; // 对 <p> 标签内的内容进行转义处理
        }
      }
      // 如果是 <img> 标签，直接返回空字符串
      if (segment.trim().startsWith("<img")) {
        return ""; // 直接干掉 <img> 标签
      }

      // 对文本内容去掉首尾空格
      return segment.trim();
    })
    .join(""); // 重新拼接所有内容
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

const r = extractBodyContent(html);
console.log("r", r);
