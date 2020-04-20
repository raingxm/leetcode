function buildList(len) {
  let head;
  let previous;
  for (let i = 0; i < len; i++) {
    let current = {
      val: i + 1,
      next: null
    };
    if (i === 0) {
      head = current;
    } else {
      previous.next = current;
    }
    previous = current;
  }
  return head;
}

function printList(head) {
  let current = head;
  let str = '';
  while(current) {
    if (current === head) {
      str += current.val;
    } else {
      str += '->' + current.val;
    }
    current = current.next;
  }
  console.log(str);
}

module.exports = {
  buildList: buildList,
  printList: printList
};
