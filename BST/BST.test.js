const BinarySearchTree = require('./BST');

describe('BinarySearchTree', () => {
  test('should instantiate a root which is equal to null', () => {
    const tree = new BinarySearchTree;
    expect(tree.root).toBeNull();
  })

  describe('BinarySearchTree Methods', () => {
    describe('#insert', () => {
      test('should insert into an empty tree', () => {
        const bst = new BinarySearchTree;
        bst.insert(99);
        expect(bst.root.data).toBe(99);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
      })
      test('should insert smaller items to the left', () => {
        const bst = new BinarySearchTree;
        bst.insert(99) // tree is empty, so root becomes 99
        bst.insert(98); // tree is not empty, so put this left
        expect(bst.root.left.data).toBe(98);
        expect(bst.root.right).toBeNull();
      })
      test('should insert larger items to the right', () => {
        const bst = new BinarySearchTree;
        bst.insert(99) // tree is empty, so root becomes 99
        bst.insert(100); // tree is not empty, so put this right
        expect(bst.root.right.data).toBe(100);
        expect(bst.root.left).toBeNull();
      })
      test('should not insert items that are already in the tree', () => {
        const bst = new BinarySearchTree;
        bst.insert(99); // tree is empty, so root becomes 99
        bst.insert(99); // same same
        expect(bst.root.data).toBe(99);
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
      })
      test('should construct a large tree', () => {
        const bst = new BinarySearchTree;
        /*
                    10
                6        12
            5      9  11    15   */
        // root
        bst.insert(10);
        expect(bst.root.data).toBe(10);
        // left
        bst.insert(6);
        bst.insert(5);
        bst.insert(9);
        expect(bst.root.left.data).toBe(6);
        expect(bst.root.left.left.data).toBe(5);
        expect(bst.root.left.right.data).toBe(9);
        // right
        bst.insert(12);
        bst.insert(11);
        bst.insert(15);
        expect(bst.root.right.data).toBe(12);
        expect(bst.root.right.left.data).toBe(11);
        expect(bst.root.right.right.data).toBe(15);
      })
    })
    describe('#createFromValues', () => {
      test('should create a bst from a list of values', () => {
        const bst = BinarySearchTree.createFromValues(10, 6, 5, 9, 12, 11, 15)
        expect(bst.root.left.data).toBe(6);
        expect(bst.root.left.left.data).toBe(5);
        expect(bst.root.left.right.data).toBe(9);
        expect(bst.root.right.data).toBe(12);
        expect(bst.root.right.left.data).toBe(11);
        expect(bst.root.right.right.data).toBe(15);
      })
    })
    describe('#find', () => {
      test('should return the node when the data is found', () => {
        const bst = BinarySearchTree.createFromValues(10, 6, 5, 9, 12, 11, 15);
        expect(bst.find(9)).toStrictEqual(bst.root.left.right);
        expect(bst.find(11)).toStrictEqual(bst.root.right.left);
      })
      test('should return -1 if the data is not present in the tree', () => {
        const bst = BinarySearchTree.createFromValues(10, 6, 5, 9, 12, 11, 15);
        expect(bst.find(100)).toBe(-1);
        expect(bst.find(3)).toBe(-1);
      })
    })
  })
})


/**
 * created a BST node class, a BST class and a BST test suite
 * Using Test Driven Development, implemented an INSERT method for BST and built out the test suite
 * Built a method that returns a BST built from given values
 * Using Test Driven Development, implemented a FIND method for BST and built out the test suite
 * ---- break
 * ---- break
 * Traversal methods
 * BFS
 * DPS
 *  - Preorder
 *  - Inorder
 *  - Postorder
 */
