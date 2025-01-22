// 定义链表节点类
class ListNode {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的指针
  }
}

// 创建环状链表
function createCircularLinkedList(values) {
  if (values.length === 0) return null; // 如果数组为空，返回 null

  // 创建头节点
  const head = new ListNode(values[0]);
  let current = head;

  // 创建链表
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  // 将最后一个节点的 next 指向头节点，形成环
  current.next = head;

  return head; // 返回链表的头节点
}

// 检测链表是否有环
function hasCycle(head) {
  if (!head || !head.next) return false; // 空链表或只有一个节点且无环

  let slow = head; // 慢指针
  let fast = head; // 快指针

  while (fast && fast.next) {
    slow = slow.next; // 慢指针每次走一步
    fast = fast.next.next; // 快指针每次走两步

    if (slow === fast) {
      return true; // 如果快慢指针相遇，说明有环
    }
  }

  return false; // 遍历结束未相遇，说明无环
}

// 打印链表（仅用于调试，环状链表会无限循环）
function printLinkedList(head, maxSteps = 10) {
  let current = head;
  let steps = 0;
  while (current && steps < maxSteps) {
    console.log(current.value);
    current = current.next;
    steps++;
  }
}

// 测试用例
const values = [1, 2, 3, 4, 5];
const circularList = createCircularLinkedList(values);

console.log("环状链表创建成功！");
console.log("检测链表是否有环：", hasCycle(circularList)); // 输出 true

// 打印链表（注意：环状链表会无限循环，所以限制打印次数）
console.log("打印链表（限制 10 步）：");
printLinkedList(circularList);

function getLink(len) {
  if (len <= 0) return null;

  const head = {}; // 虚拟头节点
  let p = head;

  for (let i = 1; i <= len; i++) {
    const cur = {
      val: i,
    };
    p.next = cur;
    p = p.next;
  }

  p.next = head.next; // 形成环

  return head; // 返回虚拟头节点
}

// 测试用例
const ll = getLink(3);
console.log("链表是否有环：", hasCycle(ll.next)); // 检测链表是否有环
console.log("打印链表（限制 10 步）：");
printLinkedList(ll.next); // 打印链表的值
