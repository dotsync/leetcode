/* eslint-disable require-jsdoc */
const validParenthesis = (string) => {
  const arr = string.split('');
  // check length, if odd return false because we need pairs
  if (string.length % 2 !== 0) return false;
  // declare right = halfway point, left = right -1
  let right = Math.floor(string.length / 2); let left = right - 1;
  // iterate with while loop (while right is < s.length)
  while (left > 0) {
    // if !isPair(right, left)
    if (!isPair(arr, left, right)) {
      return false;
    } else {
      // else move iterators to check next pair
      right ++;
      left --;
    }
  }
  return true;
  // helper checks i vs j
  function isPair(array, a, b) {
    // console.log(array[a], array[b])
    if (array[a] === '(' && array[b] === ')') return true;
    // if (array[a] === ')' && array[b] === '(') return true;
    else if (array[a] === '[' && array[b] === ']') return true;
    // if (array[a] === ']' && array[b] === '[') return true;
    else if (array[a] === '{' && array[b] === '}') return true;
    // if (array[a] === '}' && array[b] === '{') return true;
  }
};

module.exports = validParenthesis;
