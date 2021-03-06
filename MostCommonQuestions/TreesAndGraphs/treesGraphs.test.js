const BinaryTree = require('./BinaryTree');
const floodFill = require('./floodFill');
const binaryTreePaths = require('./binaryTreePaths');
const courseSchedule = require('./courseSchedule');
const binaryTreeDepth = require('./binaryTreeDepth');

describe('Trees And Graphs Section', () => {
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
          expect(bt.root.left.data).toBe(444);
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
          expect(bt.root.right.data).toBe(3);
          expect(bt.root.right.left).toBeNull();
          expect(bt.root.right.right).toBeNull();
        });
        test('should add many nodes to the tree', () => {
          const bt = new BinaryTree;
          bt.insert(5);
          bt.insert(9);
          bt.insert(3);
          bt.insert(99);
          expect(bt.root.data).toBe(5);
          expect(bt.root.left.data).toBe(9);
          expect(bt.root.left.left.data).toBe(99);
          expect(bt.root.left.left.left).toBeNull();
          expect(bt.root.left.left.right).toBeNull();
          expect(bt.root.left.right).toBeNull();
          expect(bt.root.right.data).toBe(3);
          expect(bt.root.right.left).toBeNull();
          expect(bt.root.right.right).toBeNull();
        });
      });
    });
  });
  /** ******************/
  // Easy Problems
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
    describe('binaryTreePaths problem', () => {
      test('should return a list of all possible routes in tree', () => {
        const bt = new BinaryTree;
        bt.insert(1);
        bt.insert(2);
        bt.insert(3);
        expect(binaryTreePaths(bt.root)).toStrictEqual(['1->2', '1->3']);
      });
      test('should work when there is only one node in the tree', () => {
        const bt = new BinaryTree;
        bt.insert(1);
        expect(binaryTreePaths(bt.root)).toStrictEqual(['1']);
      });
    });
    describe('binaryTreeDepth', () => {
      test('should return the depth of the binary tree', () => {
        const bt = new BinaryTree;
        bt.insert(1);
        bt.insert(2);
        bt.insert(3);
        expect(binaryTreeDepth(bt.root)).toBe(2);
      });
      test('should return 0 if tree is empty', () => {
        const bt = new BinaryTree;
        expect(binaryTreeDepth(bt)).toBe(1);
      });
    });
  });
  /** ******************/
  // Medium Problems
  // binaryTreeLevelOrderTraversal
  // validateBinarySearchTree
  // numberOfIslands
  /** ******************/
  describe('Medium Problems', () => {
    describe('courseScheduler problem', () => {

    });
  });
  /** ******************/
  // Hard Problems
  // wordLadder
  /** ******************/
  describe('Hard Problems', () => {
  });
});
