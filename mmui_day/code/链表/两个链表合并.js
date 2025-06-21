// 构造两个以整型数字为值的链表，其中的值是单调递增的。
// 将两个链表合并，保持递增。
// 要求空间复杂度O(1)
// js 实现啊
// 定义链表节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 合并两个有序链表的函数
function mergeTwoLists(l1, l2) {
  // 创建一个虚拟头节点，方便操作
  let dummy = new ListNode(-1);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  // 将剩余的节点连接上
  if (l1) {
    cur.next = l1;
  }
  if (l2) {
    cur.next = l2;
  }
  return dummy.next;
}

// 示例用法，创建两个单调递增链表并合并它们
let list1 = new ListNode(1);
let node2 = new ListNode(3);
let node3 = new ListNode(5);
list1.next = node2;
node2.next = node3;

let list2 = new ListNode(2);
let node5 = new ListNode(4);
let node6 = new ListNode(6);
list2.next = node5;
node5.next = node6;

let mergedList = mergeTwoLists(list1, list2);
// 可以遍历输出合并后的链表查看结果
while (mergedList) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}
