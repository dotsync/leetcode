/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
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
    if (data === currentTreeNode.data) return;
    if (data < currentTreeNode.data) {
      if (currentTreeNode.left === null) {
        currentTreeNode.left = newTreeNode;
      } else {
        return this.insert(data, currentTreeNode.left);
      }
    } else { // (data > currentTreeNode.data)
      if (currentTreeNode.right === null) {
        currentTreeNode.right = newTreeNode;
      } else { // keep looking
        return this.insert(data, currentTreeNode.right);
      }
    }
  }
  // #find
  find(data, currentTreeNode = this.root) {
    if (currentTreeNode === null) return -1;
    if (currentTreeNode.data === data) {
      return currentTreeNode;
    }
    // search left child
    if (data < currentTreeNode.data) {
      if (currentTreeNode !== null) {
        return this.find(data, currentTreeNode.left);
      } else { // if null, then could not find
        return -1;
      }
    }
    // search right child
    if (data > currentTreeNode.data) {
      if (currentTreeNode.right !== null) {
        return this.find(data, currentTreeNode.right);
      } else {
        return -1;
      }
    }
  }
  breadthFirstSearch() {
    let currentTreeNode = this.root;
    if (currentTreeNode === null) return -1;
    const result = [];
    const queue = [currentTreeNode];

    while (queue.length > 0) {
      // important got stuck here. I was adding the root twice if u dont add the line below
      // So itts important to dequeue that first item otherwise you are searching the list twice
      currentTreeNode = queue.shift();
      if (currentTreeNode.left !== null) {
        queue.push(currentTreeNode.left);
      }
      if (currentTreeNode.right !== null) {
        queue.push(currentTreeNode.right);
      }
      result.push(currentTreeNode.data);
    }
    return result;
  }
  reverseBreadthFirstSearch() {
    /*
    8
  3  10
    returns: [10, 3, 8]
    */
    const queue = [];
    const result = [];
    let node = this.root;
    if (node !== null) queue.push(node);
    while (queue.length) {
      // get next item in queue
      const siblings = [];
      const siblingsLength = queue.length;
      for (let i = 0; i < siblingsLength; i++) {
        node = queue.shift();
        siblings.push(node.data);
        if (node.left !== null) {
          queue.push(node.left);
        }
        if (node.right !== null) {
          queue.push(node.right);
        }
      }
      result.unshift(siblings);
    }
    return result;
  }
  // reverseBreadthFirstSearch(root) {
  //   const result = [];
  //   if (this.root === null) {
  //     return result;
  //   }
  //   let currentNode = this.root;
  //   const queue = [];
  //   queue.push(currentNode);
  //   while (queue.length > 0) {
  //     let levelSize = queue.length;
  //     let currentLevel = [];
  //     for (let i = 0; i < levelSize; i++) {
  //       currentNode = queue.shift();
  //       // add the node to the current level
  //       currentLevel.push(currentNode.data);
  //       // insert the children of current node in the queue
  //       if (currentNode.left !== null) {
  //         queue.push(currentNode.left);
  //       }
  //       if (currentNode.right !== null) {
  //         queue.push(currentNode.right);
  //       }
  //     }
  //     result.unshift(currentLevel);
  //   }
  //   console.log(result)
  //   return result;
  // }
  postOrderDFS() {
    const result = [];
    function traverse(currentTreeNode) {
      if (currentTreeNode !== null) {
        traverse(currentTreeNode.left);
        traverse(currentTreeNode.right);
        result.push(currentTreeNode.data);
      }
    }
    traverse(this.root);
    return result;
  }
  preOrderDFS() {
    const result = [];
    function traverse(currentTreeNode) {
      if (currentTreeNode !== null) {
        traverse(currentTreeNode.right);
        traverse(currentTreeNode.left);
        result.push(currentTreeNode.data);
      }
    }
    traverse(this.root);
    return result;
  }
  inOrderDFS() {
    const result = [];
    function traverse(currentTreeNode) {
      if (currentTreeNode !== null) {
        traverse(currentTreeNode.left);
        result.push(currentTreeNode.data);
        traverse(currentTreeNode.right);
      }
    }
    traverse(this.root);
    return result;
  }
  isSubtree(t) {
    function preOrder(node, left) {
      if (node === null) {
        return left ? 'left-null' : 'right-null';
      }
      return `#${node.data} ${preOrder(node.left, true)} ${preOrder(node.right, false)}`;
    }
    const sTree = preOrder(this.root);
    const tTree = preOrder(t.root);
    return (sTree.indexOf(tTree) === -1) ? false : true;
  };
}

BinarySearchTree.createFromValues = function (...values) {
  const bst = new BinarySearchTree;
  for (let i = 0; i < values.length; i++) {
    bst.insert(values[i]);
  }
  return bst;
};

module.exports = BinarySearchTree;
