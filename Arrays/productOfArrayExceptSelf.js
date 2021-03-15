const productOfArrayExceptSelf = (arr) => {
  let result = []
  result[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    result[i] = arr[i - 1] * result[i - 1];
  }
  let right = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right *= arr[i];
  }
  return result;
}

module.exports = productOfArrayExceptSelf;
