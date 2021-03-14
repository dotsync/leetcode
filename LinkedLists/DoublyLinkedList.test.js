const DoublyLinkedList = require('./DoublyLinkedList');


describe('Doubly Linked List', () => {
  test('should be instantiated with a head, tail and length', () => {
    const doublyLinkedList = new DoublyLinkedList;
    expect(doublyLinkedList.length).toBe(0);
    expect(doublyLinkedList.head).toBeNull();
    expect(doublyLinkedList.tail).toBeNull();
  })
  // methods
  // #addToHead
  // #addToTail
  // #addAtIndex
  // #findSpecificIndex
  // #findSpecificData
  // #printList
})

