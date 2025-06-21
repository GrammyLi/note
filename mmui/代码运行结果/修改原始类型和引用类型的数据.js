const arr2 = [{ name: "a", age: 1 }, { name: "b", age: 2 }, 1, 2];
arr2.map((item) => {
  item.age++; // 引用类型的数据: 会修改引用类型的数据 { name: "a", age: 2, }, { name: "b", age: 3, }
  if (typeof item !== "object") item++; // 原始类型的数据: 不会被修改，仍然是 1 2
});
console.log("arr2", arr2);
// [ { name: "a", age: 2, }, { name: "b", age: 3, }, 1, 2, ];
