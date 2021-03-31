/* eslint-disable require-jsdoc */
class BinaryTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data, currentTreeNode = this.root) {
    const newTreeNode = new BinaryTreeNode(data);
    if (currentTreeNode === null) {
      this.root = newTreeNode;
      return this;
    } else if (currentTreeNode.left === null) {
      currentTreeNode.left = newTreeNode;
    } else if (currentTreeNode.right === null) {
      currentTreeNode.right = newTreeNode;
    } else {
      return this.insert(data, currentTreeNode.left);
    }
  }
}
module.exports = BinaryTree;
