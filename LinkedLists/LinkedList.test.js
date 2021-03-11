const LinkedList = require('./LinkedList');

describe('Linked List', () => {
  test('should be instantiated with 0 length and this.head should === null', () => {
    const list = new LinkedList;
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  })
  describe('Linked List Methods', () => {
    describe('#findSpecificIndex', () => {
      test('should return null with index less than 0', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(-1)).toBeNull();
      })
      test('should return null with index greater than length of list', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(4)).toBeNull();
      })
      test('should return the nodes data with index in range', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(0)).toBe(10);
        expect(list.findSpecificIndex(1)).toBe(20);
        expect(list.findSpecificIndex(2)).toBe(30);
        expect(list.findSpecificIndex(3)).toBe(40);
      })
    })
    describe('#findSpecficData', () => {
      test('should return -1 when no data is present in list', () => {
        const list = LinkedList.createListFromValues('hello', 'world', 'is', 'anyone', 'there')
        expect(list.findSpecficData('random')).toBe(-1);
      })
      test('should return the index at which the data is found', () => {
        const list = LinkedList.createListFromValues('hello', 'world', 'is', 'anyone', 'there')
        expect(list.head.data).toBe('hello');
        expect(list.findSpecficData('hello')).toBe(0);
        expect(list.findSpecficData('world')).toBe(1);
        expect(list.findSpecficData('is')).toBe(2);
        expect(list.findSpecficData('anyone')).toBe(3);
        expect(list.findSpecficData('there')).toBe(4);
      })


    })
    describe('#addAtHead', () => {
      // add first item to list at head
      test('should add data to begining of list when list is empty', () => {
        const list = new LinkedList;
        list.addAtHead('first in')
        expect(list.head.data).toBe('first in');
      })
      // add two more items to list at head
      test('should have the most recently added item at the head and a length of 3', () => {
        const list = new LinkedList;
        list.addAtHead('first in')
        list.addAtHead('second in')
        const oldHead = list.head;
        list.addAtHead('third in')
        expect(list.head.data).toBe('third in');
        expect(list.length).toBe(3);
        expect(list.head.next).toBe(oldHead);
      })
    })
    describe('#addAtTail', () => {

    })
    describe('#addAtIndex', () => {

    })
    describe('#deleteAtIndex', () => {

    })
    describe('#printList', () => {

    })

  })
})
  // addAtTail
  // addAtIndex
  // deleteAtIndex
  // print
