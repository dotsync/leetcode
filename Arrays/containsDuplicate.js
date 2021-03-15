function containsDuplicates(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = true;
    else return true;
  }
  return false;
}

module.exports = containsDuplicates;
