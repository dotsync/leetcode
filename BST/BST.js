const BinarySearchTreeNode = require('./BSTNode');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // BST methods
  // insert(data)
  insert(data, currentTreeNode = this.root) {
    const newTreeNode = new BinarySearchTreeNode(data);
    if (currentTreeNode === null) {
      this.root = newTreeNode;
      return this;
    }
    // search for a place to insert data
    if (data === currentTreeNode.data) return
    if (data < currentTreeNode.data) {
      if (currentTreeNode.left === null) {
        currentTreeNode.left = newTreeNode
      } else {
        return this.insert(data, currentTreeNode.left)
      }
    } else { // (data > currentTreeNode.data)
      if (currentTreeNode.right === null) {
        currentTreeNode.right = newTreeNode
      } else { // keep looking
        return this.insert(data, currentTreeNode.right)
      }
    }
  }
  // #find
}

BinarySearchTree.createFromValues = function (...values) {
  const bst = new BinarySearchTree;
  for (let i = 0; i < values.length; i++) {
    bst.insert(values[i])
  }
  return bst
}

module.exports = BinarySearchTree;
