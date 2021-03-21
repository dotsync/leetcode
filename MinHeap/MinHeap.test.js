const MinHeap = require('./MinHeap')

describe('MinHeap', () => {
  test('should construct an array with one element, null, when instantiated. ', () => {
    const mh = new MinHeap
    expect(mh.size).toBe(0)
    expect(mh.heap[0]).toBeNull()
    expect(mh.heap.length).toBe(1)
  })
  describe('MinHeap #methods', () => {
    describe('#add', () => {
      test('should add new item to the heap and increase size', () => {
        const mh = new MinHeap
        expect(mh.size).toBe(0);
        mh.add(9);
        expect(mh.size).toBe(1);
        expect(mh.heap[0]).toBeNull();
        expect(mh.heap[1]).toBe(9);
        expect(mh.heap.length).toBe(2);
      })
      test('should bubble up the newly added items', () => {
        const minHeap = new MinHeap
        minHeap.add(9)
        minHeap.add(3)
        minHeap.add(2)
        minHeap.add(4)
        console.log(minHeap.heap)
        expect(minHeap.heap).toStrictEqual([null, 2, 4, 3, 9])
      })
    })
  })
})
