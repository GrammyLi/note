# TypeScript 泛型详解

## 什么是泛型？

泛型（Generics）是 TypeScript 中的一种强大特性，它允许我们在定义函数、接口或类时**不预先指定具体类型**，而是在使用时再指定类型。泛型提供了代码重用性和类型安全性的完美结合。

## 基本使用

泛型使用 `<T>` 语法定义类型参数：

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString"); // 显式指定类型
let output2 = identity("myString"); // 类型推断
```

## 多个泛型参数

当需要多个泛型参数时，可以用逗号分隔：

```typescript
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let result1 = pair<string, number>("age", 30); // [string, number]
let result2 = pair(1, true); // [number, boolean] 类型推断
```

## 泛型约束

可以使用 `extends` 关键字约束泛型类型：

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // 现在可以访问.length属性
  return arg;
}

loggingIdentity("hello"); // OK
loggingIdentity(3); // 错误：数字没有.length属性
```

## 泛型在接口中的应用

```typescript
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
let pair2: KeyValuePair<string, boolean> = { key: "isValid", value: true };
```

## 泛型在类中的应用

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myNumber = new GenericNumber<number>();
myNumber.zeroValue = 0;
myNumber.add = (x, y) => x + y;

let myString = new GenericNumber<string>();
myString.zeroValue = "";
myString.add = (x, y) => x + y;
```

## 默认泛型类型

可以为泛型参数指定默认类型：

```typescript
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const strArray = createArray(3, "x"); // string[]
const numArray = createArray<number>(3, 1); // number[]
```

## 泛型工具类型

TypeScript 提供了一些内置的泛型工具类型：

```typescript
type Partial<T> = { [P in keyof T]?: T[P] }; // 所有属性变为可选
type Readonly<T> = { readonly [P in keyof T]: T[P] }; // 所有属性变为只读
type Pick<T, K extends keyof T> = { [P in K]: T[P] }; // 从T中选取部分属性
```

泛型是 TypeScript 中非常强大的特性，它可以帮助我们编写更灵活、更可重用的代码，同时保持类型安全。
