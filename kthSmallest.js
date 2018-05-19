class MinHeap {
  constructor() {
    this.heap = [];
  }

  getMin() {
    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop();
    let currentIndex = 0;

    while (true) {
      const current = this.heap[currentIndex];
      const leftIdx = (currentIndex + 1) * 2;
      const rightIdx = leftIdx - 1;
      const left = this.heap[leftIdx] || null;
      const right = this.heap[rightIdx] || null;

      if (left !== null && right !== null) {
        if (left < current && right < current) {
          if (left < right) {
            this.swap(currentIndex, leftIdx);
            currentIndex = leftIdx;
          } else {
            this.swap(currentIndex, rightIdx);
            currentIndex = rightIdx;
          }
        } else if (left < current) {
          this.swap(currentIndex, leftIdx);
          currentIndex = leftIdx;
        } else if (right < current) {
          this.swap(currentIndex, rightIdx);
          currentIndex = rightIdx;
        } else {
          break;
        }
      } else if (left !== null && left < current) {
        this.swap(currentIndex, leftIdx);
        currentIndex = leftIdx;
      } else if (right !== null && right < current) {
        this.swap(currentIndex, rightIdx);
        currentIndex = rightIdx;
      } else {
        break;
      }
    }

    return min;
  }

  insertElement(el) {
    this.heap.push(el);

    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex + 1) / 2) - 1;

      if (this.heap[parentIndex] > this.heap[currentIndex]) {
        this.swap(parentIndex, currentIndex);
      }

      currentIndex = parentIndex;
    }
  }

  swap(idx1, idx2) {
    const temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}

function getKthSmallest(arr, k) {
  const heap = arr.reduce((_heap, el) => {
    _heap.insertElement(el);

    return _heap;
  }, new MinHeap());

  let i = k;
  let kthSmallestEl = null;

  while (i > 0) {
    kthSmallestEl = heap.getMin();
    i--;
  }

  return kthSmallestEl;
}
