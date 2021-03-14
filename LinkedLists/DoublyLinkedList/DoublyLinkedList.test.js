const DoublyLinkedList = require('./DoublyLinkedList');


describe('Doubly Linked List', () => {
  test('should be instantiated with a head, tail and length', () => {
    const doublyLinkedList = new DoublyLinkedList;
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();
  })
  // methods
  describe('Doubly Linked List Methods', () => {
    // #addToHead
    describe('#addToHead', () => {
      // adding when list is empty
      test('should add new head to empty list', () => {
        const doublyLinkedList = new DoublyLinkedList;
        doublyLinkedList.addToHead(1);
        expect(doublyLinkedList.head.data).toBe(1);
        expect(doublyLinkedList.head.next).toBeNull();
        expect(doublyLinkedList.head.prev).toBeNull();
        // when adding just one item, and tail is empty. tail and head represent item
        expect(doublyLinkedList.tail.data).toBe(1);
        expect(doublyLinkedList.length).toBe(1);
      })
      // adding when list is not empty
      test('should add to the head when list is not empty', () => {
        const doublyLinkedList = new DoublyLinkedList
        doublyLinkedList.addToHead(3)
        doublyLinkedList.addToHead(2)
        doublyLinkedList.addToHead(1)
        // [head = 1] <-> [2] <-> [tail = 3]
        expect(doublyLinkedList.head.data).toBe(1);
        expect(doublyLinkedList.head.prev).toBeNull();
        expect(doublyLinkedList.head.next.data).toBe(2);
        expect(doublyLinkedList.head.next.next.data).toBe(3);
        expect(doublyLinkedList.tail.data).toBe(3);
        expect(doublyLinkedList.length).toBe(3);
      })
      test('should work for a large input', () => {
        const doublyLinkedList = DoublyLinkedList.createListFromValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        // [head = 1] <-> [2] <-> [3] <-> [4] <-> [5].... <-> [tail = 10]
        expect(doublyLinkedList.head.data).toBe(1)
        expect(doublyLinkedList.tail.data).toBe(10)
        expect(doublyLinkedList.length).toBe(10)
        expect(doublyLinkedList.head.next.data).toBe(2)
        expect(doublyLinkedList.tail.prev.data).toBe(9)
      })
    })
    // #addToTail
    describe('#addToTail', () => {

    })
    // #addAtIndex
    // #findSpecificIndex
    // #findSpecificData
    // #printList
  })
})

