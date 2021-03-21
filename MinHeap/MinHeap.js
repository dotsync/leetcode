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
  }
}

module.exports = MinHeap;
