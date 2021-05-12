const squaringASortedArray = (array) => {
  const result = Array(array.length).fill(0);
  // create pointers
  let left = 0; let right = array.length - 1;
  let largestSquare = array.length - 1;
  // while left is less than right
  // compare squares, and assign largest to the right
  while (left < right) {
    const leftSquare = array[left] * array[left];
    const rightSquare = array[right] * array[right];
    if (leftSquare > rightSquare) {
      result[largestSquare] = leftSquare;
      left++;
    } else {
      result[largestSquare] = rightSquare;
      right--;
    }
    largestSquare--;
  }
  return result;
};

module.exports = squaringASortedArray;
