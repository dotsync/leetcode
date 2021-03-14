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
