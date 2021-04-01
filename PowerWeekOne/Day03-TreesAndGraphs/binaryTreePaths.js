const binaryTreePaths = (root) => {
  const paths = [];
  if (root === null) return paths;
  dfsPrint(root, '', paths);
  return paths;

  /**
   * @param {Node} currentNode
   * @param {String} currentPath string to add currentNode to
   * @param {Array} paths final result list to push string to
   */
  function dfsPrint(currentNode, currentPath, paths) {
    // add current node data to string
    currentPath += currentNode.data;
    // if currentNode is a leaf node then push string to result and return
    if (currentNode.left === null && currentNode.right === null) {
      paths.push(currentPath);
      return;
    }
    if (currentNode.left !== null) {
      dfsPrint(currentNode.left, currentPath + '->', paths);
    }
    if (currentNode.right !== null) {
      dfsPrint(currentNode.right, currentPath + '->', paths);
    }
  }
};

module.exports = binaryTreePaths;
