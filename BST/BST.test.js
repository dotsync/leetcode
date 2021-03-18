const BinarySearchTree = require('./BST');

describe('BinarySearchTree', () => {
  test('should instantiate a root which is equal to null', () => {
    const tree = new BinarySearchTree;
    expect(tree.root).toBeNull();
  })

  describe('BinarySearchTree Methods', () => {
    describe('#insert', () => {
      test('should insert into an empty tree', () => {
        const bst = new BinarySearchTree
        bst.insert(99);
        expect(bst.root).toBe(99)
        expect(bst.root.left).toBeNull();
        expect(bst.root.right).toBeNull();
      })
    })
  })
})

