const rowAverage = (root) => {
  const result = [];
  if (root === null) return result;
  const queue = [];
  let node;
  // fill queue with first item
  queue.push(root);
  while (queue.length) {
    const rowLength = queue.length;
    let rowMax = 0;
    // iterate only the portion of the queue that is this row
    for (let i = 0; i < rowLength; i++) {
      // pull first item from queue
      node = queue.shift();
      // increase count of rowMax by the amount of current node on this level
      rowMax += node.data;
      // check if we need to add left and right to the queue
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    // now that we have checked this entire row, push average to result
    result.push(rowMax / rowLength);
  }
  return result;
};

// Time: O(n)
// Space: O(n)

module.exports = rowAverage;
