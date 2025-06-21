// `Exclude`、`Omit`、`Merge`、`Intersection`、`Overwrite`的作用
// Exclude<T, U> 从  T  中排除出可分配给  U 的元素
// Omit<T, K> 的作用是忽略 T 中的某些属性
// Merge<O1, O2> 是将两个对象的属性合并
// Compute<A & B> 是将交叉类型合并
// Intersection<T, U>的作用是取 T 的属性,此属性同样也存在与 U
// Overwrite<T, U> 是用 U 的属性覆盖 T 的相同属性
// 资料: https://juejin.cn/post/6999985372440559624
// 实战: 本项目/2-FRONTEND/TS/README.md
// 扩展
// - Record
// - Partial (可选)
// - ReadOnly (只读)
// - ReturnType (返回值)
// - Exclude (排除)
// - Pick (选取) ------------------ 注意 和 Omit 的区别
// - Omit (省略) ------------------ 注意 和 Pick 的区别
// - 资料: https://juejin.cn/post/6999985372440559624
