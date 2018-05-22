function mergeSorted(root1, root2) {
  let pointer1 = root1;
  let pointer2 = root2;
  let root = pointer2.data < pointer1.data ? pointer2 : pointer1;
  let current = root;

  if (root === pointer1) {
    pointer1 = pointer1.next;
  } else {
    pointer2 = pointer2.next;
  }

  while (pointer1 && pointer2) {
    if (pointer1.data < pointer2.data) {
      current.next = pointer1;
      pointer1 = pointer1.next;
    } else {
      current.next = pointer2;
      pointer2 = pointer2.next;
    }

    current = current.next;
  }

  if (pointer1) {
    current.next = pointer1;
  }

  if (pointer2) {
    current.next = pointer2;
  }

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

const a = new Node(1);
const b = new Node(7);
const c = new Node(11);

const d = new Node(2);
const e = new Node(5);
const f = new Node(13);

a.next = b;
b.next = c;

d.next = e;
e.next = f;

const mergedNode = mergeSorted(a, d);
print(mergedNode);
