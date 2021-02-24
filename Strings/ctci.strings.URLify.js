const uRLify = (string, shortLength) => {
  let arr = string.split('')
  let extra = string.length - shortLength;
  let space = ' ';
  let bIndex = string.length - 1;

  for (let checker = bIndex - extra; checker >= 0; checker--) {
    if (arr[checker] !== ' ') {
      arr[bIndex] = arr[checker];
      bIndex--;
    } else if (arr[checker] === ' ') {
      arr[bIndex] = '0';
      arr[bIndex - 1] = '2';
      arr[bIndex - 2] = '%';
      bIndex -= 3
    }
  };
  return arr.join('');
};

let actual = uRLify('Mr John Smith    ', 13);
let expected = 'Mr%20John%20Smith';
if (actual === expected) {
  console.log('Passed');
} else {
  console.log('failed')
};

// Time is O(n)
// Space is O(n) -- I tried O(1) but cannot modify a string in place with javascript as seen below
let sample = 'test';
sample[0] = '!';
console.log(sample === '!est');
console.log(sample);
