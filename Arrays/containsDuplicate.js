/* Given an array of integers, find if the array contains any duplicates.
    Your function should return true if any value appears at least twice in the array
      and it should return false if every element is distinct. */

function containsDuplicates(arr) {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = true;
    else return true;
  }
  return false;
}

module.exports = containsDuplicates;

const tester = (actual, expected) => {
  if (actual === expected) console.log('passed');
  else console.log('failed');
};
tester(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
tester(containsDuplicates([1, 2, 3, 1]), true);
tester(containsDuplicates([1, 2, 3, 4]), false);
