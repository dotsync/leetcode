const squaringASortedArray = (array) => {
  // input is sorted [-2, -1, 0, 2, 3]
  const swap = (sortedArray) => {
    let i = 0; let j = 1;
    // check if already sorted
    if (Math.abs(array[0]) < Math.abs(array[1])) return array;
    while (Math.abs(array[i]) < Math.abs(array[j])) {
      // swap then reset pointers
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j++;
    }
    i = 0;
    j = 1;
  };
  swap(array);
  console.log(array);
  for (let i = 0; i < array.length; i ++) {
    array[i] = array[i] * array[i];
  }
  return array;
};

module.exports = squaringASortedArray;
