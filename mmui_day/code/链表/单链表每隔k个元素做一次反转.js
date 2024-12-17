// 标题
// 单链表每隔k个元素做一次反转

// 题目描述
// 给定一个链表，每隔k个元素做一次反转

// Example:
// Inputs: 1->2->3->4->5->6->7->8->NULL and k = 3
// Output: 3->2->1->6->5->4->8->7->NULL.

// Inputs: 1->2->3->4->5->6->7->8->NULL and k = 5
// Output: 5->4->3->2->1->8->7->6->NULL.

// 定义链表节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function reverseKGroup(head, k) {
  if (!head) return null;
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let tail = dummy;
  while (true) {
    // 移动tail指针，判断是否够k个节点
    for (let i = 0; i < k && tail; i++) {
      tail = tail.next;
    }
    if (!tail) break;
    // 记录下一组的头节点
    let nextGroupHead = tail.next;
    // 反转当前组的k个节点
    let [start, end] = reverse(prev.next, tail);
    prev.next = start;
    end.next = nextGroupHead;
    prev = end;
    tail = prev;
  }
  return dummy.next;
}

function reverse(start, end) {
  let prev = null;
  let cur = start;
  while (cur !== end) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  cur.next = prev;
  return [end, start];
}

// 示例用法
let list = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(7);
let node8 = new ListNode(8);
list.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;

let result = reverseKGroup(list, 3);
while (result) {
  console.log(result.val);
  result = result.next;
}
