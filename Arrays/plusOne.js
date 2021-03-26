/*

Interesting problem. Easy conceptually but the big take away here is to not rush into problems because they seem easy. I never even though about what would happen if the last number is 9 until I started to code. This is a big no no!

*/

const plusOne = digits => {
  let n = digits.length
  // check for 9's starting from the back
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] == 9) {
      digits[i] = 0;
    } else { // found the first non nine number
      digits[i]++
      return digits
    }
  }
  // if we made it past the else statment everything must have been a 9
  // therefor turn the first digit into a 1 and push an extra 0 onto the end of the array
  digits[0] = 1
  digits.push(0)
  return digits;
}

// time O(n)
// space O(n)
