// 手写深拷贝
const objForDeepClone = {
  num: 1,
  str: "string",
  boo: true,
  nul: null,
  undefined: undefined,
  [Symbol("symbol")]: "symbol", // symbol key
  bigint: BigInt(9007199254740991), // bigint
  arr: [1, 2, 3],
  obj: {
    name: "woow_wu7",
    obj2: { age: 10 },
  },
  fun: function () {
    console.log("this is a function.");
  },
  date: new Date(), // 特殊对象，结构化克隆
  regexp: new RegExp(),
  error: new Error(), // SyntaxError ReferenceError RangeError TypeError URIError EvalError
};
obj.circle = obj; // 循环引用

const deepClone = (obj, map = new Map()) => {
  if (typeof obj !== "object" || obj === null) return obj;

  let res = Array.isArray(obj) ? [] : {};

  if (map.has(obj)) return map.get(obj);
  map.set(obj, res);

  switch (obj.constructor) {
    case RegExp:
    case Error:
    case Date: {
      res = new obj.constructor(obj);
      break;
    }
    default: {
      Reflect.ownKeys(obj).forEach((key) => {
        if (typeof obj[key] === "object") {
          res[key] = deepClone(obj[key], map);
        } else {
          res[key] = obj[key];
        }
      });
    }
  }

  return res;
};

// 调用
const instance = deepClone(objForDeepClone);
console.log("instance1111: ", instance);

// 修改原数据，看是否深拷贝成功
objForDeepClone.num = 1111;
objForDeepClone.str = "strrrrrr";
objForDeepClone.boo = false;
objForDeepClone.arr = [2, 2, 2, 2];
objForDeepClone.obj = {};
objForDeepClone.fun = function () {
  console.log("this is a function2222222.");
};
objForDeepClone.date = new Date(22222);
objForDeepClone.regexp = new RegExp(22222);
objForDeepClone.error = new Error(22222);

console.log("instance2222: ", instance);
