const arrayTester = (actual, expected) => {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) console.log(`Failed
    Expected: ${expected}
    Actual: ${actual}`);
  }
  actual.length === expected.length && console.log('passed')
}

module.exports = arrayTester;
