// Swap Nodes in Pairs

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const listHelper = require('./util/list');

var swapPairs = function(head) {
  let loopIndex = 1;
  let current = head;
  let previous;
  let prePrevious;
  let newHead = head;
  while (current) {
    if (loopIndex % 2 === 0) {
      // 进行 swap
      previous.next = current.next;
      current.next = previous;
      if (!prePrevious) {
        newHead = current;
      } else {
        prePrevious.next = current;
      }
      previous = current;
      current = previous.next;
    }

    if (previous) {
      prePrevious = previous;
    }
    previous = current;
    current = current.next;
    loopIndex ++;
  }
  return newHead;
};

const head = listHelper.buildList(5);
listHelper.printList(swapPairs(head));

const head2 = listHelper.buildList(1);
listHelper.printList(swapPairs(head2));

const head3 = listHelper.buildList(4);
listHelper.printList(swapPairs(head3));
