function deepClone(obj, map = new WeakMap()) {
  // 处理 null
  if (obj == null) return obj;
  // 处理日期
  if (obj instanceof Date) return new Date(obj);
  // 处理正则
  if (obj instanceof RegExp) return new RegExp(obj);
  // 处理 Symbol
  if (typeof obj === "symbol") return Symbol(obj.description);

  // 处理原始类型
  if (typeof obj !== "object") return obj;

  // 处理循环引用
  let result = new obj.constructor();
  if (map.get(obj)) {
    return obj;
  } else {
    map.set(obj, result);
  }

  // 处理 Map
  if (Object.prototype.toString.call(obj) === "[object Map]") {
    obj.forEach((value, key) => {
      result.set(key, deepClone(value, map));
    });
    return result;
  }

  // 处理 Set
  if (Object.prototype.toString.call(obj) === "[object Set]") {
    obj.forEach((value) => {
      result.add(deepClone(value, map));
    });
    return result;
  }

  // 处理对象和数组
  if (typeof obj === "object") {
    for (const key in obj) {
      // 保证 key 不是原型上的属性
      if (obj.hasOwnProperty(key)) {
        // 递归
        result[key] = deepClone(obj[key], map);
      }
    }
    return result;
  }
}
