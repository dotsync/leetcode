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
}

module.exports = MinHeap;
