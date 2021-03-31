const SinglyLinkedList = require(
    '../../LinkedLists/SinglyLinkedList/SinglyLinkedList');
// const copyListWithRandomPointer = require('./copyListWithRandomPointer');
const reverseLinkedList = require('./reverseLinkedList');
const mergeTwoSortedLists = require('./mergeTwoSortedLists');

describe('Day02 LinkedList List Section', () => {
  /** ******************/
  // Easy Problems
  /** ******************/
  describe('Easy Problems', () => {
    describe('#mergeTwoSortedLists', () => {
      test('should work when given two empty lists', () => {
        const list1 = new SinglyLinkedList;
        const list2 = new SinglyLinkedList;
        expect(mergeTwoSortedLists(list1.head, list2.head)).toBeNull();
      });
      test('should merge when list 1 is empty and 2 is full', () => {
        const list1 = new SinglyLinkedList;
        const list2 = SinglyLinkedList.createListFromValues(2, 3, 5);
        const expected = SinglyLinkedList.createListFromValues(2, 3, 5);
        const actual = mergeTwoSortedLists(list1.head, list2.head);
        expect(actual).toStrictEqual(expected.head);
      });
      test('should merge when list 2 is empty and 1 is full', () => {
        const list1 = SinglyLinkedList.createListFromValues(1, 4, 6);
        const list2 = new SinglyLinkedList;
        const expected = SinglyLinkedList.createListFromValues(1, 4, 6);
        const actual = mergeTwoSortedLists(list1.head, list2.head);
        expect(actual).toStrictEqual(expected.head);
      });
      test('should merge the two sorted lists', () => {
        const list1 = SinglyLinkedList.createListFromValues(1, 4, 6);
        const list2 = SinglyLinkedList.createListFromValues(2, 3, 5);
        const expected = SinglyLinkedList.createListFromValues(
            1, 2, 3, 4, 5, 6);
        const actual = mergeTwoSortedLists(list1.head, list2.head);
        expect(actual).toStrictEqual(expected.head);
      });
    });
    describe('#reverseLinkedList', () => {
      test('should work with an empty list', () => {
        const ll = new SinglyLinkedList;
        expect(reverseLinkedList(ll.head)).toBeNull();
      });
      test('should reverse the given list', () => {
        const input = SinglyLinkedList.createListFromValues(5, 4, 3, 2, 1);
        const expected = SinglyLinkedList.createListFromValues(1, 2, 3, 4, 5);
        expect(reverseLinkedList(input.head)).toStrictEqual(expected.head);
      });
    });
  });
  /** ******************/
  // Medium Problems
  /** ******************/
  describe('Medium Problems', () => {
    describe('copyListWithRandomPointer', () => {
      // TODO: create a custom function that creates linked list
      // They need a random property
      test('should return a deep copy of the list', () => {
        expect('this doesnt test').toBe('this doesnt test');
      });
    });
    describe('addingTwoNumbers', () => {
      test('should reverse the two lists and add them together', () => {
        const list1 = SinglyLinkedList.createListFromValues(2, 4, 3);
        const list2 = SinglyLinkedList.createListFromValues(5, 6, 4);
        const expected = SinglyLinkedList.createListFromValues(7, 0, 8);
        const actual = addingTwoNumbers(list1.head, list2.head);
        expect(actual).toStrictEqual(expected.head);
      });
      test('should work with large lists', () => {
        const list1 = SinglyLinkedList.createListFromValues(
            9, 9, 9, 9, 9, 9, 9);
        const list2 = SinglyLinkedList.createListFromValues(9, 9, 9, 9);
        const expected = SinglyLinkedList.createListFromValues(
            8, 9, 9, 9, 0, 0, 0, 1);
        const actual = addingTwoNumbers(list1.head, list2.head);
        expect(actual).toStrictEqual(expected.head);
      });
    });
  });
  /** ******************/
  // Hard Problems
  /** ******************/
  describe('Hard Problems', () => {
    describe('reverseNodesInKGroups', () => {
    });
    describe('mergeKSortedLists', () => {
    });
  });
});
