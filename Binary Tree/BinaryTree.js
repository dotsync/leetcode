/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
const BinaryTreeNode = require('./BinaryTreeNode');

class BinaryTree {
  constructor() {
    this.root = null;
  }
  // insert
  insert(data, current = this.root) {
    const newNode = new BinaryTreeNode(data);
    // if (data === )
    if (current === null) {
      this.root = newNode;
      return this;
    } else if (current.left === null && current.right === null) {
      current.left = newNode;
      return this;
    } else if (current.right === null && current.left !== null) {
      current.right = newNode;
      return this;
    } else {
      this.insert(data, current.left);
    }
  }
}
module.exports = BinaryTree;
