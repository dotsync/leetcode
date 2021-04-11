const removeZeroes = (arr) => {
  // iterate arr
  // move all chars
  let j = 0;
  for (let i = 0; i < arr.length; i ++) {
    // if the current is not a zero, swap i
    if (arr[i] !== 0) {
      arr[j++] = arr[i];
    }
  }
  // add on extra zeros
  for (let i = j; i < arr.length; i ++) {
    arr[i] = 0;
  }
  return arr;
};

// Don't use extra space
// Dont reaarrange order

module.exports = removeZeroes;
