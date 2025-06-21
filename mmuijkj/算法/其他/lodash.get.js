function get(obj, path, defaultValue) {
  const keys = path.split(".");
  let result = obj;
  for (const key of keys) {
    result = result ? result[key] : undefined;
    if (result === undefined) return defaultValue;
  }
  return result;
}

// 示例
const obj = { a: { b: { c: 42 } } };
console.log(get(obj, "a.b.c", 0)); // 42
console.log(get(obj, "a.b.x", 0)); // 0
