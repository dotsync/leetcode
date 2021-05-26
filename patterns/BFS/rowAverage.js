const rowAverage = (root) => {
  const result = [];
  const queue = [];
  if (root === null) return result;
  queue.push(root);
  let node;
  while (queue.length) {
    const rowLength = queue.length;
    let rowMax = 0;
    for (let i = 0; i < rowLength; i++) {
      node = queue.shift();
      rowMax += node.data;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(rowMax / rowLength);
  }
  return result;
};

module.exports = rowAverage;
