const MinHeap = require('./MinHeap')

describe('MinHeap', () => {
  test('should construct an array with one element, null, when instantiated. ', () => {
    const mh = new MinHeap
    expect(mh.size).toBe(0)
    expect(mh.heap[0]).toBeNull()
    expect(mh.heap.length).toBe(1)
  })
  describe('MinHeap #methods', () => {

  })
})
