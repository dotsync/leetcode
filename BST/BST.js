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
  find(data, currentTreeNode = this.root) {
    if (currentTreeNode === null) return -1
    if (currentTreeNode.data === data) {
      return currentTreeNode;
    }
    // search left child
    if (data < currentTreeNode.data) {
      if (currentTreeNode !== null) {
        return this.find(data, currentTreeNode.left)
      } else { // if null, then could not find
        return -1
      }
    }
    // search right child
    if (data > currentTreeNode.data) {
      if (currentTreeNode.right !== null) {
        return this.find(data, currentTreeNode.right)
      } else {
        return -1
      }
    }
  }
  breadthFirstSearch() {
    let currentTreeNode = this.root
    if (currentTreeNode === null) return -1
    let result = [];
    let queue = [currentTreeNode];

    while (queue.length > 0) {
      // important got stuck here. I was adding the root twice if u dont add the line below
      // So itts important to dequeue that first item otherwise you are searching the list twice
      currentTreeNode = queue.shift()
      if (currentTreeNode.left !== null) {
        queue.push(currentTreeNode.left)
      }
      if (currentTreeNode.right !== null) {
        queue.push(currentTreeNode.right)
      }
      result.push(currentTreeNode.data)
    }
    return result
  }
}

BinarySearchTree.createFromValues = function (...values) {
  const bst = new BinarySearchTree;
  for (let i = 0; i < values.length; i++) {
    bst.insert(values[i])
  }
  return bst
}

module.exports = BinarySearchTree;
