class MinHeap {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  // methods
  add(data) {
    this.heap.push(data);
    this.size++;
  }
}

module.exports = MinHeap;
