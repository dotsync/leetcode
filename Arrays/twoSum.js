const twoSum = function (arr, target) {
  const numbersSeen = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let opposite = target - current
    if (numbersSeen[opposite] >= 0) {
      return [numbersSeen[opposite], i]
    } else {
      numbersSeen[current] = i
    }
  }
}

module.exports = twoSum;
