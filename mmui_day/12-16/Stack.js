// 定义栈类
class Stack {
  constructor() {
    this.items = []; // 用于存储栈元素的数组
    this.length = 0; // 用于记录栈的长度，初始为0
  }

  // 入栈操作，将元素添加到栈顶，并增加栈长度
  push(element) {
    this.items.push(element);
    this.length++;
  }

  // 出栈操作，移除并返回栈顶元素，同时减少栈长度
  pop() {
    if (this.isEmpty()) {
      return null; // 如果栈为空，返回null
    }
    this.length--;
    return this.items.pop();
  }

  // 查看栈顶元素，不改变栈的状态
  peek() {
    if (this.isEmpty()) {
      return null; // 如果栈为空，返回null
    }
    return this.items[this.length - 1];
  }

  // 判断栈是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 获取栈的当前长度
  getLength() {
    return this.length;
  }
}

// 使用示例
let stack = new Stack();
stack.push(5);
stack.push(10);
console.log(stack.peek()); // 输出10
console.log(stack.pop()); // 输出10
console.log(stack.getLength()); // 输出1
console.log(stack.isEmpty()); // 输出 false
