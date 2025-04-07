function compile(template) {
  const regex = /\{\{([^}]+)\}\}/g;
  return function (data) {
    return template.replace(regex, (match, path) => {
      const keys = path.trim().split(".");
      return keys.reduce((obj, key) => obj?.[key], data) || "";
    });
  };
}

// 使用示例
const template = "Hello, {{user.name}}! Age: {{age}}";
const render = compile(template);
console.log(render({ user: { name: "Alice" }, age: 25 }));
// 输出: "Hello, Alice! Age: 25"

// https://juejin.cn/post/7488235095884464140

