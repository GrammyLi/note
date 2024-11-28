// 问题：如何实现一个数组 [1,2,3,4,5]，通过 arr[-1] 访问到 5 ？
// 思路: proxy
const arr = new Proxy([1, 2, 3, 4, 5], {
  get: (target, propKey, receiver) => {
    const _key = Number(propKey) + target.length;
    return propKey > 0
      ? Reflect.get(target, propKey, receiver)
      : Reflect.get(target, _key, receiver); // : target[_key]; 代理陷阱
  },
  set: (target, propKey, value, receiver) =>
    Reflect.set(target, propKey, value, receiver),
});
console.log(arr[-1]); // get
arr[0] = 1000; // set

// proxy 返回的对象 是 原对象吗？
// - 是一个新的对象，毕竟new了，生成的是新的实例对象
const obj = {};
const ins = new Proxy(obj, {});
console.log("obj === ins", obj === ins); // false
