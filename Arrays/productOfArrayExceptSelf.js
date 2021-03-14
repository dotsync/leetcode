const productOfArrayExceptSelf = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    let multiplier = 1;
    let rp = arr.length - 1;
    let count = 1;
    while (rp !== i) {
      count *= arr[rp];
      rp--;
    }
    multiplier *= arr[i];
    arr[i] = count;
  }
  return arr;
}

module.exports = productOfArrayExceptSelf;
