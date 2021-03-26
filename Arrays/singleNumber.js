const singleNumber = nums => {
  const sorted = nums.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      return sorted[i]
    } else { // does match
      // should move a total of two spaces
      i++
    }
  }
};

module.exports = singleNumber
