function reverseLinkedList(root, n) {
  let prev = null;
  let curr = root;
  let next = null;
  let tail = root;
  let i = 0;

  while (curr && i < n) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;

    i++;
  }

  if (tail) {
    tail.next = next;
  }

  return prev;
}

function reverseLinkedList2(root, m, n) {
  let i = 1;
  let curr = root;

  if (m === 1) {
    return reverseLinkedList(root, n);
  }

  while (curr && i < m - 1) {
    curr = curr.next;
    i++;
  }

  const nodeToReverse = curr.next;

  curr.next = null;
  const newHead = reverseLinkedList(nodeToReverse, n - m + 1);
  curr.next = newHead;

  return root;
}

function print(root) {
  let current = root;

  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const a = new Node(97);
const b = new Node(63, a);
const c = new Node(89, b);
const d = new Node(34, c);
const e = new Node(82, d);
const f = new Node(95, e);
const g = new Node(4, f);
const h = new Node(70, g);
const i = new Node(14, h);
const j = new Node(41, i);
const k = new Node(38, j);
const l = new Node(83, k);
const m = new Node(49, l);
const n = new Node(32, m);
const o = new Node(68, n);
const p = new Node(56, o);
const q = new Node(99, p);
const r = new Node(52, q);
const s = new Node(33, r);
const t = new Node(54, s);

print(reverseLinkedList2(t, 13, 15));

