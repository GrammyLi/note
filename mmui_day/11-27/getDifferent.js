// 完成一个 getDifferent 方法，要求接受两个参数，可以返回两个数组中不同的数据集合
// e.g
let aa = [1, 2, 3, 4];
let bb = [4, 5, 6];
// answer = [1,2,3,5,6]
// e.g
let aaa = [
  { name: "a", age: 2 },
  { name: "b", age: 2 },
  { name: "c", age: 3 },
];
let bbb = [
  { name: "a", age: 1 },
  { name: "b", age: 2 },
  { name: "d", age: 3 },
];
// answer = [{name: 'a', age:2}, {name: 'a', age:1}, {name: 'c', age:3}, {name: 'd', age:3}]

const log = console.log.bind(console);

const ensure = function (condition, message) {
  if (!condition) {
    log("*** 测试失败:", message);
  } else {
    log("||| 测试成功");
  }
};

// 获取基本类型数组的不同
const getDifferentBasic = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const diff1 = arr1.filter((item) => !set2.has(item)); // arr1 中有而 arr2 中没有的元素
  const diff2 = arr2.filter((item) => !set1.has(item)); // arr2 中有而 arr1 中没有的元素

  return [...diff1, ...diff2];
};

// 获取对象数组的不同
const getDifferentObjects = (arr1, arr2) => {
  const map1 = new Map(arr1.map((item) => [JSON.stringify(item), item]));
  const map2 = new Map(arr2.map((item) => [JSON.stringify(item), item]));

  // arr1 中有而 arr2 中没有的元素
  const diff1 = arr1.filter((item) => !map2.has(JSON.stringify(item)));
  // arr2 中有而 arr1 中没有的元素
  const diff2 = arr2.filter((item) => !map1.has(JSON.stringify(item)));

  return [...diff1, ...diff2];
};

// 综合处理基本类型和对象类型
const getDifferent = (arr1, arr2) => {
  if (
    arr1.every((item) => typeof item !== "object") &&
    arr2.every((item) => typeof item !== "object")
  ) {
    return getDifferentBasic(arr1, arr2); // 处理基本类型
  }
  return getDifferentObjects(arr1, arr2); // 处理对象类型
};

// 测试用例
const test_getDifferent = () => {
  // 基本类型数组
  let aa = [1, 2, 3, 4];
  let bb = [4, 5, 6];
  ensure(
    JSON.stringify(getDifferent(aa, bb)) === JSON.stringify([1, 2, 3, 5, 6]),
    "基本类型数组测试"
  );

  // 对象数组
  let aaa = [
    { name: "a", age: 2 },
    { name: "b", age: 2 },
    { name: "c", age: 3 },
  ];
  let bbb = [
    { name: "a", age: 1 },
    { name: "b", age: 2 },
    { name: "d", age: 3 },
  ];
  ensure(
    JSON.stringify(getDifferent(aaa, bbb)) ===
      JSON.stringify([
        { name: "a", age: 2 },
        { name: "a", age: 1 },
        { name: "c", age: 3 },
        { name: "d", age: 3 },
      ]),
    "对象数组测试"
  );

  log("*** getDifferent 测试成功");
};

test_getDifferent();
