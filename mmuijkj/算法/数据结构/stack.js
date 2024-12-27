class Stack {
  constructor() {
    this.elements = [];
  }
  peek() {
    return this.elements?.[this.elements.length - 1];
  }
  size() {
    return this.elements.length;
  }
  pop() {
    return this.elements.pop();
  }
  push(element) {
    this.elements.push(element);
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}
