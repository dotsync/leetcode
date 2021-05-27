const minDepth = (root) => {
  if (root === null) return 0;
  const queue = [];
  let minDepth = 1;
  queue.push(root);
  while (queue.length) {
    const rowLength = queue.length;
    for (let i = 0; i < rowLength; i++) {
      const node = queue.shift();
      if (node.left === null && node.right === null) {
        return minDepth;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    minDepth++;
  }
};

module.exports = minDepth;
