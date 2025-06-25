# TypeScript 中 interface 和 type 的区别

interface 和 type 是 TypeScript 中定义类型的两种主要方式，它们有以下主要区别：

## 1. 继承与实现

**interface** 可以被继承和实现：
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

class Labrador implements Dog {
  name: string;
  breed: string;
}
```

**type** 不能直接被类实现：
```typescript
type Animal = {
  name: string;
};

// 错误：类不能实现类型别名
class Cat implements Animal {
  name: string;
}
```

## 2. 声明合并

**interface** 支持声明合并：
```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// 合并为 { name: string; age: number; }
const user: User = {
  name: 'Alice',
  age: 30
};
```

**type** 不允许重复声明：
```typescript
type User = {
  name: string;
};

// 错误：重复标识符 'User'
type User = {
  age: number;
};
```

## 3. 描述范围

**interface** 主要用于描述对象、类或函数的结构：
```typescript
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}
```

**type** 可以表示任何类型，包括原始类型、联合类型、元组等：
```typescript
type Name = string;  // 原始类型
type Point = [number, number];  // 元组
type ID = string | number;  // 联合类型
```

## 4. 高级类型操作

**type** 可以使用联合类型、交叉类型等高级操作：
```typescript
// 联合类型
type Status = 'active' | 'inactive';

// 交叉类型
type Named = { name: string };
type Aged = { age: number };
type Person = Named & Aged;

// 条件类型
type IsString<T> = T extends string ? true : false;

// 映射类型
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## 使用建议

- 当需要被类实现或需要声明合并时，使用 `interface`
- 当需要定义联合类型、元组或其他复杂类型时，使用 `type`
- 在其他情况下，两者可以互换，根据团队偏好选择