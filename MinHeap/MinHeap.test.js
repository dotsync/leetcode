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
        expect(minHeap.heap).toStrictEqual([null, 2, 4, 3, 9])
      })
    })
    describe('popMin', () => {
      test('should return null if trying to remove min from empty list', () => {
        const minHeap = new MinHeap
        expect(minHeap.popMin()).toBeNull()
        expect(minHeap.size).toBe(0)
      })
      test('should remove the smallest item from list and bubble up a new min', () => {
        const minHeap = new MinHeap
        for (let i = 10; i > 0; i--) {
          minHeap.add(Math.floor(Math.random(10) * 100))
        }
        expect(minHeap.heap[0]).toBeNull();
        const expected = minHeap.heap[1]
        expect(minHeap.popMin()).toBe(expected);
        expect(minHeap.heap[0]).toBeNull();
      })
    })
  })
})
