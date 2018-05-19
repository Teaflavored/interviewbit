function getLength(root) {
  let i = 1;
  let curr = root;

  while (curr.next) {
    curr = curr.next;
    i++;
  }

  return i;
}

function getNth(node, n) {
  let i = n;
  let curr = node;

  while (i > 0) {
    curr = curr.next;
    i--;
  }

  return curr;
}

function reverseList(root) {
  let prev = null;
  let current = root;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function subract(root) {
  const length = getLength(root);
  const oneBeforeMid = Math.floor(length / 2) - 1;
  const oneBeforeMidNode = getNth(root, oneBeforeMid);
  const midNode = oneBeforeMidNode.next;
  oneBeforeMidNode.next = reverseList(midNode);

  let currentFromMid = oneBeforeMidNode.next;
  let current = root;
  for(let i = 0; i < oneBeforeMid + 1; i++) {
    current.value = currentFromMid.value - current.value;
    current = current.next;
    currentFromMid = currentFromMid.next;
  }

  const oneAfterMidNode = oneBeforeMidNode.next;
  oneBeforeMidNode.next = reverseList(oneAfterMidNode);

  return root;
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
