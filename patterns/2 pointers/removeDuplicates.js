const removeDuplicates = (arr) => {
  let replacer = 1;
  for (let checker = 0; checker < arr.length; checker ++) {
    if (arr[replacer - 1] !== arr[checker]) {
      arr[replacer] = arr[checker];
      replacer ++;
    }
  }
  return replacer;
};

// time: O(n)
// space: O(1)

module.exports = removeDuplicates;
