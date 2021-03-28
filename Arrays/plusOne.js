const plusOne = digits => {
  let n = digits.length
  if (n === 0) return digits
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else { // found the first non nine number
      digits[i]++
      return digits
    }
  }
  digits[0] = 1
  digits.push(0)
  return digits;
}

// time O(n)
// space O(n)
module.exports = plusOne
