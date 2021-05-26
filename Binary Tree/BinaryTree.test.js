/* eslint-disable max-len */
const BinaryTreeNode = require('./BinaryTreeNode');
const BinaryTree = require('./BinaryTree');


describe('BinaryTree Class', () => {
  test('should instantiate a class with a root property', () => {
    const bt = new BinaryTree;
    expect(bt.root).toBeNull();
  });

  describe('BinaryTreeNode class', () => {
    test('should have a left, right, and data property', () => {
      const node = new BinaryTreeNode(9);
      expect(node.left).toBeNull();
      expect(node.right).toBeNull();
      expect(node.data).toBe(9);
    });
  });
  describe('BinaryTree Methods', () => {
    describe('#insert', () => {
      test('should insert into empty list', () => {
        const bt = new BinaryTree;
        bt.insert(1);
        expect(bt.root.data).toBe(1);
        expect(bt.root.left).toBeNull();
        expect(bt.root.right).toBeNull();
      });
      test('should insert into left side first', () => {
        const bt = new BinaryTree;
        bt.insert(1);
        bt.insert(2);
        expect(bt.root.data).toBe(1);
        expect(bt.root.left.data).toBe(2);
        expect(bt.root.left.left).toBeNull();
        expect(bt.root.left.right).toBeNull();
        expect(bt.root.right).toBeNull();
      });
      test('should create a balanced tree by adding third item to right node', () => {
        const bt = new BinaryTree;
        bt.insert(1);
        bt.insert(2);
        bt.insert(3);
        expect(bt.root.data).toBe(1);
        expect(bt.root.left.data).toBe(2);
        expect(bt.root.right.data).toBe(3);
        expect(bt.root.left.left).toBeNull();
        expect(bt.root.left.right).toBeNull();
        expect(bt.root.right.left).toBeNull();
        expect(bt.root.right.right).toBeNull();
      });
      test('should create a large binary tree', () => {
        const bt = new BinaryTree;
        for (let i = 0; i < 10; i++) {
          bt.insert(i + 1);
        }
        expect(bt.root.data).toBe(1);
        expect(bt.root.left.data).toBe(2);
        expect(bt.root.right.data).toBe(3);
        expect(bt.root.left.left.data).toBe(4);
        expect(bt.root.left.right.data).toBe(5);
        expect(bt.root.right.left.data).toBe(6);
        expect(bt.root.right.right.data).toBe(7);
      });
    });
  });
});
