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
      test('should add new node to empty list', () => {
        const doublyLinkedList = new DoublyLinkedList;
        doublyLinkedList.addToHead(1);
        expect(doublyLinkedList.head.data).toBe(1);
        expect(doublyLinkedList.head.next).toStrictEqual(doublyLinkedList.tail);
        expect(doublyLinkedList.head.prev).toBeNull();
        expect(doublyLinkedList.tail.next).toBeNull();
        expect(doublyLinkedList.tail.prev).toStrictEqual(doublyLinkedList.head);
        expect(doublyLinkedList.length).toBe(1);
      })

      // adding when list is not empty
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

