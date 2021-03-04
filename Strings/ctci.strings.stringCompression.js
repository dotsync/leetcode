function stringCompression(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    result = result + string[i];
    if (string[i] !== string[i + 1]) {
      result = result + '1';
    } else {
      let j = i
      let count = 1
      while (string[j] === string[j + 1]) {
        count++
        j++
      } // iterator jumps forward
      i = j
      result = result + count;
    }
  }
  if (result.length > string.length) return string
  else return result
}

const tester = (actual, expected) => {
  if (actual === expected) console.log('passed');
  else console.log('failed');
};
tester(stringCompression('aabcccccaa'), 'a2b1c5a2');
tester(stringCompression('abc'), 'abc');
