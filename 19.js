// 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || n <= 0) {
    return;
  }
  let nodeList = [];
  let current = head;
  let newHead = head;
  while(current) {
    nodeList.push(current);
    current = current.next;
  }
  if (nodeList.length === 1) {
    return null;
  }

  if (n === nodeList.length) {
    newHead = nodeList[nodeList.length - n + 1];
  } else if (n === 1) {
    nodeList[nodeList.length - n - 1].next = null;

  } else {
    let prevRemoveNode = nodeList[nodeList.length - n - 1];
    let nextRemoveNode = nodeList[nodeList.length - n + 1];
    prevRemoveNode.next = nextRemoveNode;
  }
  return newHead;
};

// printList(removeNthFromEnd(buildList(3), 3));
// printList(removeNthFromEnd(buildList(1), 1));
