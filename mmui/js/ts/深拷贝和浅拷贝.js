//深拷贝
function deepClone(obj, map = new WeakMap()) {
  // 基本类型直接返回
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  // 处理循环引用
  if (map.has(obj)) {
    return map.get(obj);
  }
  // 处理日期和正则
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  // 创建对象副本
  const clone = Array.isArray(obj) ? [] : {};
  map.set(obj, clone); // 存储引用以处理循环引用
  // 递归复制属性
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], map);
    }
  }
  return clone;
}

// 浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存
// 深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象。
