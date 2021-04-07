/* eslint-disable max-len */
/* eslint-disable valid-jsdoc */
const integerToEnglishWords = (num) => {
  // Convert a non-negative integer num to its English words representation.
  if (num === 0) return 'Zero';
  if (!Number.isInteger(num)) {
    return 'Unable to convert non integers';
  }
  const numberStrings = {
    'firstNinteen': ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
      'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen',
      'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'],
    'tenth': ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'],
    'thousanth': ['', ' Thousand', ' Million', ' Billion'],
  };
  const thou = ['', ' Thousand', ' Million', ' Billion'];
  /**
   * Using the divide and conquer approach,
   * divide problem in to sub problems of hundreds
   */
  function hundred(hundred) {
    let currentWord = '';
    if (hundred > 99) {
      currentWord = numberStrings.firstNinteen[Math.floor(hundred / 100)] + ' Hundred ';
      hundred = hundred % 100;
    }
    if (hundred > 19) {
      currentWord += numberStrings.tenth[Math.floor(hundred / 10)] + ' ';
      hundred = hundred % 10;
    }
    // goes staight to prop
    currentWord += numberStrings.firstNinteen[hundred];
    return currentWord.trim();
  };

  // divide and conquer
  const hundredGroup = [];
  for (let i = 0; num; i++, num = Math.floor(num / 1000)) {
    const numSegment = num % 1000;

    const word = hundred(numSegment);
    if (word) {
      hundredGroup.unshift(word + thou[i]);
    }
  }
  return hundredGroup.join(' ').trim();
};

module.exports = integerToEnglishWords;
