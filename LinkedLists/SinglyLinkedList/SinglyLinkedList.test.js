const SinglyLinkedList = require('./SinglyLinkedList');

describe('Linked List', () => {
  test('should be instantiated with 0 length and this.head should === null', () => {
    const list = new SinglyLinkedList;
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  })
  describe('Linked List Methods', () => {
    describe('#findSpecificIndex', () => {
      test('should return null with index less than 0', () => {
        const list = SinglyLinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(-1)).toBeNull();
      })
      test('should return null with index greater than length of list', () => {
        const list = SinglyLinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(4)).toBeNull();
      })
      test('should return the nodes data with index in range', () => {
        const list = SinglyLinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(0).data).toBe(10);
        expect(list.findSpecificIndex(1).data).toBe(20);
        expect(list.findSpecificIndex(2).data).toBe(30);
        expect(list.findSpecificIndex(3).data).toBe(40);
      })
    })
    describe('#findSpecficData', () => {
      test('should return -1 when no data is present in list', () => {
        const list = SinglyLinkedList.createListFromValues('hello', 'world', 'is', 'anyone', 'there')
        expect(list.findSpecficData('random')).toBe(-1);
      })
      test('should return the index at which the data is found', () => {
        const list = SinglyLinkedList.createListFromValues('hello', 'world', 'is', 'anyone', 'there')
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
        const list = new SinglyLinkedList;
        list.addAtHead('first in')
        expect(list.head.data).toBe('first in');
      })
      // add two more items to list at head
      test('should have the most recently added item at the head and a length of 3', () => {
        const list = new SinglyLinkedList;
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
      test('should addAtHead when the list is empty', () => {
        const list = new SinglyLinkedList;
        list.addAtTail('firstNode');
        expect(list.head.data).toBe('firstNode');
        expect(list.length).toBe(1);
      })
      test('should add to the end of the list when there already is a head', () => {
        const list = SinglyLinkedList.createListFromValues(10);
        list.addAtTail(20);
        const tail = list.head.next;
        expect(tail.data).toBe(20);
        expect(list.length).toBe(2);
        expect(tail.next).toBeNull();
      })
    })
    describe('#addAtIndex', () => {
      test('should addToHead when the index is less than 0', () => {
        const list = SinglyLinkedList.createListFromValues(20, 30, 40)
        expect(list.addAtIndex(-1, 10)).toBe(0);
        expect(list.head.data).toBe(10)
        expect(list.length).toBe(4)
      })
      test('should addToTail when the index is greater than length of list', () => {
        const list = SinglyLinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.addAtIndex(4, 50)).toBe(4);
        expect(list.addAtIndex(100, 60)).toBe(5);
        expect(list.length).toBe(6)
      })
      test('should return the index the data was inserted when the index is in range', () => {
        const list = SinglyLinkedList.createListFromValues(10, 20, 40, 50)
        expect(list.addAtIndex(2, 30)).toBe(2)
        expect(list.length).toBe(5)
      })

    })
    describe('#removeDupes', () => {
      test('should delete all the duplicate letters', () => {
        const list = SinglyLinkedList.createListFromValues('a', 'b', 'a', 'a', 'c', 'b');
        const expected = SinglyLinkedList.createListFromValues('a', 'b', 'c');
        expect(JSON.stringify(list.removeDupes())).toBe(JSON.stringify(expected.head));
        expect(list.length).toBe(3);
      })
      test('should delete all the duplicate numbers', () => {
        const list = SinglyLinkedList.createListFromValues(99, 1, 6, 1, 1, 43, 2, 2, 99);
        const expected = SinglyLinkedList.createListFromValues(99, 1, 6, 43, 2);
        expect(JSON.stringify(list.removeDupes())).toBe(JSON.stringify(expected.head));
        expect(list.length).toBe(5);
      })
    })
    describe('#reverse', () => {
      test('should work with an empty list', () => {
        const list = SinglyLinkedList.createListFromValues();
        const expected = SinglyLinkedList.createListFromValues();
        expect(JSON.stringify(list.reverse(list.head))).toBe(JSON.stringify(expected.head))
      })
      test('should work on a list with a single item', () => {
        const list = SinglyLinkedList.createListFromValues(1);
        const expected = SinglyLinkedList.createListFromValues(1);
        expect(JSON.stringify(list.reverse(list.head))).toBe(JSON.stringify(expected.head))
      })
      test('should reverse the list', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 4, 5);
        const expected = SinglyLinkedList.createListFromValues(5, 4, 3, 2, 1);
        expect(JSON.stringify(list.reverse(list.head))).toBe(JSON.stringify(expected.head))
      })
    })
    describe('#hasCycle', () => {
      test('should return true for a single node list with cycle', () => {
        const singleCycle = SinglyLinkedList.createListFromValues(1)
        let head = singleCycle.head
        singleCycle.head.next = head
        expect(singleCycle.hasCycle()).toBe(true)
      })
      test('should return false for empty list', () => {
        const list = new SinglyLinkedList;
        expect(list.hasCycle()).toBe(false)
      })
      test('should return false when there is no cycle in list', () => {
        const list5 = SinglyLinkedList.createListFromValues(1, 2, 3, 4, 5)
        expect(list5.hasCycle()).toBe(false)
      })
      test('should return true because list has a cycle', () => {
        const cycleList = SinglyLinkedList.createListFromValues('the number three', 'points', 'to', 5, 1, 2, 3);
        // set 3.next to be 5
        cycleList.head.next.next.next.next.next.next.next = cycleList.head.next.next.next
        expect(cycleList.hasCycle()).toBe(true)
      })
    })
    describe('#kthToLastWithLength', () => {
      test('should return last node when k is <= 0', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        expect(list.kthToLastWithLength(-1)).toBe('c');
        expect(list.kthToLastWithLength(-100)).toBe('c');
        expect(list.kthToLastWithLength(0)).toBe('c');
      })
      test('should return the head when k is > than the list.length', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        expect(list.kthToLastWithLength(7)).toBe(1);
        expect(list.kthToLastWithLength(100)).toBe(1);
      })
      test('should return the head when k === list.length', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        expect(list.kthToLastWithLength(6)).toBe(1);
      })
      test('should return the kth to last element', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        expect(list.kthToLastWithLength(6)).toBe(1);
        expect(list.kthToLastWithLength(5)).toBe(2);
        expect(list.kthToLastWithLength(4)).toBe(3);
        expect(list.kthToLastWithLength(3)).toBe('a');
        expect(list.kthToLastWithLength(2)).toBe('b');
        expect(list.kthToLastWithLength(1)).toBe('c');
      })
    })
    describe('#kthToLastNoLength', () => {
      test('should return null when k is <= 0', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        expect(list.kthToLastNoLength(-1, list.head)).toBeNull()
        expect(list.kthToLastNoLength(-100, list.head)).toBeNull();
        expect(list.kthToLastNoLength(0, list.head)).toBeNull();
      })
      test('should return the head when k is > than the list.length', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        expect(list.kthToLastNoLength(7, list.head)).toBeNull();
        expect(list.kthToLastNoLength(100, list.head)).toBeNull();;
      })
      test('should return the kth to last element', () => {
        const list = SinglyLinkedList.createListFromValues(1, 2, 3, 'a', 'b', 'c');
        // expect(list.kthToLastNoLength(6, list.head)).toBe(1);
        expect(list.kthToLastNoLength(5, list.head)).toBe(2);
        expect(list.kthToLastNoLength(4, list.head)).toBe(3);
        expect(list.kthToLastNoLength(3, list.head)).toBe('a');
        expect(list.kthToLastNoLength(2, list.head)).toBe('b');
        expect(list.kthToLastNoLength(1, list.head)).toBe('c');
      })

    })
    describe('#mergeTwoSortedLists', () => {
      test('should return empty list if both list are empty', () => {
        const list1 = new SinglyLinkedList;
        const list2 = new SinglyLinkedList;
        const expected = new SinglyLinkedList;
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(expected.head);

      })
      test('should work with small lists', () => {
        const list1 = SinglyLinkedList.createListFromValues(1)
        const list2 = SinglyLinkedList.createListFromValues(2)
        const expected = SinglyLinkedList.createListFromValues(1, 2)
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(expected.head)
      })
      test('should return list2 if list1 is empty', () => {
        const list1 = new SinglyLinkedList;
        const list2 = SinglyLinkedList.createListFromValues(1, 3, 4);
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(list2.head)
      })
      test('should return list1 if list2 is empty', () => {
        const list1 = SinglyLinkedList.createListFromValues(1, 3, 4);
        const list2 = new SinglyLinkedList;
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(list1.head)
      })
      test('should merge two sorted lists of equal length', () => {
        const list1 = SinglyLinkedList.createListFromValues(1, 2, 4);
        const list2 = SinglyLinkedList.createListFromValues(1, 3, 4);
        const expected = SinglyLinkedList.createListFromValues(1, 1, 2, 3, 4, 4);
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(expected.head);
      })
      test('should merge two sorted lists where list2 is larger', () => {
        const list1 = SinglyLinkedList.createListFromValues(1, 2, 4);
        const list2 = SinglyLinkedList.createListFromValues(1, 3, 4, 5);
        const expected = SinglyLinkedList.createListFromValues(1, 1, 2, 3, 4, 4, 5);
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(expected.head);
      })
      test('should merge two sorted lists where list2 is smaller', () => {
        const list1 = SinglyLinkedList.createListFromValues(1, 2, 4, 5);
        const list2 = SinglyLinkedList.createListFromValues(1, 3, 4);
        const expected = SinglyLinkedList.createListFromValues(1, 1, 2, 3, 4, 4, 5);
        expect(list1.mergeTwoSortedLists(list1.head, list2.head)).toStrictEqual(expected.head);
      })
    })
    // describe('#partition', () => {
    //   test('should work for empty list', () => {
    //     const list = new SinglyLinkedList;
    //     const testcase = list.partition(10)
    //     expect(testcase).toBeNull();
    //   })
    //   test('should divide the list into two halves split by the given partition', () => {
    //     const list = SinglyLinkedList.createListFromValues(1, 9, 10, 3);
    //     const expectedResult = SinglyLinkedList.createListFromValues(1, 3, 9, 10);
    //     const actualResult = list.partition(5);
    //     console.log(actualResult)
    //     expect(actualResult.data).toBe(1)
    //   })
    // })
    describe('#copyListWithRandomPointer', () => {
      // Example 1:
      // Input: head = [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]
      // Output: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]

      // Example 2:
      // Input: head = [[1, 1], [2, 1]]
      // Output: [[1, 1], [2, 1]]

      // Example 3:
      // Input: head = [[3, null], [3, 0], [3, null]]
      // Output: [[3, null], [3, 0], [3, null]]

      // Example 4:
      // Input: head = []
      // Output: []
      // Explanation: The given linked list is empty(null pointer), so return null.
    })

  })
})
