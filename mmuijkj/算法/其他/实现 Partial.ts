// 实现 Partial
// Partial<T> 是一个内置类型工具，它将类型 T 的所有属性变为可选。

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// 示例
interface User {
  name: string;
  age: number;
}

const partialUser: MyPartial<User> = {
  name: "John", // age 可选
};

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

// 示例
interface User {
  name: string;
  age: number;
}

const readOnlyUser: MyReadOnly<User> = {
  name: "John",
  age: 30,
};

// readOnlyUser.age = 31; // 报错，无法修改
