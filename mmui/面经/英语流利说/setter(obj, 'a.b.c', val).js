function setter(obj, path, val) {
  // 将路径字符串按点分割成数组
  const keys = path.split(".");
  let current = obj;
  const len = keys.length;

  // 遍历除最后一个键之外的所有键
  for (let i = 0; i < len - 1; i++) {
    const key = keys[i];
    // 如果当前对象中不存在该键，则创建一个空对象
    if (!current[key]) {
      current[key] = {};
    }
    // 更新当前对象为下一级对象
    current = current[key];
  }

  // 获取最后一个键
  const lastKey = keys[len - 1];
  // 将最后一个键对应的值设置为传入的 val
  current[lastKey] = val;

  return obj;
}

// 示例使用
const obj = {};
const result = setter(obj, "a.b.c", 10);
console.log(result);
