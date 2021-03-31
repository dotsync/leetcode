const BinaryTree = require('./BinaryTree');
const floodFill = require('./floodFill');
const binaryTreePaths = require('./binaryTreePaths');

describe('Day03 Trees And Graphs Section', () => {
  describe('Binary Tree Class', () => {
    describe('Binary Tree Class Methods', () => {
      describe('#insert', () => {
        test('should insert node as root into empty tree', () => {
          const bt = new BinaryTree;
          bt.insert(1);
          expect(bt.root.data).toBe(1);
          expect(bt.root.left).toBeNull();
          expect(bt.root.right).toBeNull();
        });
        test('should add left node first', () => {
          const bt = new BinaryTree;
          bt.insert(1);
          bt.insert(444);
          expect(bt.root.data).toBe(1);
          expect(bt.root.left).toBe(444);
          expect(bt.root.left.left).toBeNull();
          expect(bt.root.left.right).toBeNull();
          expect(bt.root.right).toBeNull();
        });
        test('should add right node second', () => {
          const bt = new BinaryTree;
          bt.insert(5);
          bt.insert(9);
          bt.insert(3);
          expect(bt.root.data).toBe(5);
          expect(bt.root.left.data).toBe(9);
          expect(bt.root.left.left).toBeNull();
          expect(bt.root.left.right).toBeNull();
          expect(bt.root.right.data).tobe(3);
          expect(bt.root.right.left).toBeNull();
          expect(bt.root.right.right).toBeNull();
        });
      });
    });
  });
  /** ******************/
  // Easy Problems
  // binaryTreePaths
  /** ******************/
  describe('Easy Problems', () => {
    describe('floodFill problem', () => {
      test('should change the colors of pixels', () => {
        const image1 = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        const expected1 = [[2, 2, 2], [2, 2, 0], [2, 0, 1]];
        expect(floodFill(image1, 1, 1, 2)).toStrictEqual(expected1);
      });
      test('should not change color because pixel is already newcolor', () => {
        const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        const expected = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
        expect(floodFill(image, 1, 1, 1)).toStrictEqual(expected);
      });
    });
    describe('binaryTreePaths', () => {
      test('should return a list of all possible routes in tree', () => {

      });
      test('should work when there is only one node in the tree', () => {

      });
      test('should return empty array if given an empty tree', () => {

      });
    });
  });
  /** ******************/
  // Medium Problems
  // binaryTreeLevelOrderTraversal
  // validateBinarySearchTree
  // courseScheduler
  // numberOfIslands
  /** ******************/
  describe('Medium Problems', () => {
  });
  /** ******************/
  // Hard Problems
  // wordLadder
  /** ******************/
  describe('Hard Problems', () => {
  });
});
