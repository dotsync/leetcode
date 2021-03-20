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
    })

  })
})
