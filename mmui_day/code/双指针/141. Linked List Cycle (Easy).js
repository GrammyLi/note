// 判断链表是否存在环

// 使用双指针，一个指针每次移动一个节点，一个指针每次移动两个节点，如果存在环，那么这两个指针一定会相遇。

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const hasCycle = (head) => {
  if (!head || !head.next) return false; // 链表为空或只有一个节点，不可能有环

  let slow = head; // 慢指针
  let fast = head; // 快指针

  while (fast && fast.next) {
    slow = slow.next; // 慢指针每次走一步
    fast = fast.next.next; // 快指针每次走两步

    if (slow === fast) {
      return true; // 快慢指针相遇，说明有环
    }
  }

  return false; // 快指针走到末尾，说明无环
};

// 创建链表 1 -> 2 -> 3 -> 4 -> 2 (环)
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = head.next; // 创建环

console.log(hasCycle(head)); // 输出: true

// 创建链表 1 -> 2 -> 3 -> 4 -> null
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);

console.log(hasCycle(head2)); // 输出: false

// 时间与空间复杂度
// 每个节点最多被访问两次（一次由慢指针，一次由快指针）。 o(n)
// 只使用了快慢指针，不需要额外存储空间 o(1)