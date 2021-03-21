class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  // methods
  add(data) {
    this.heap.push(data);
    this.size++;
    this.bubbleUp()
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  bubbleUp() {
    let current = this.size
    while (current > 1 && this.heap[current] < this.heap[Math.floor(current / 2)]) {
      this.swap(current, Math.floor(current / 2))
      current = Math.floor(current / 2)
    }
  }
  popMin() {
    if (this.size === 0) {
      return null;
    }
    this.swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    return min;

    heapify();
  }

  heapify() {
    let current = 1;
    let leftChild = getLeft(current);
    let rightChild = getRight(current);

    while (this.canSwap(current, leftChild, rightChild)) {
      while (this.canSwap(current, leftChild, rightChild)) {
        if (this.exists(leftChild) && this.exists(rightChild)) {
          if (this.heap[leftChild] < this.heap[rightChild]) {
            this.swap(current, leftChild);
            current = leftChild;
          } else {
            this.swap(current, rightChild);
            current = rightChild;
          }
        } else {
          this.swap(current, leftChild);
          current = leftChild;
        }
        leftChild = getLeft(current);
        rightChild = getRight(current);
      }
      leftChild = getLeft(current);
      rightChild = getRight(current);
    }
  }

  exists(index) {
    return index <= this.size;
  }

  canSwap(current, leftChild, rightChild) {
    // Check that one of the possible swap conditions exists
    return (
      this.exists(leftChild) && this.heap[current] > this.heap[leftChild]
      || this.exists(rightChild) && this.heap[current] > this.heap[rightChild]
    );
  }

}
const getParent = current => Math.floor((current / 2));
const getLeft = current => current * 2;
const getRight = current => current * 2 + 1;
module.exports = MinHeap;
