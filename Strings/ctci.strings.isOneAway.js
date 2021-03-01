const isOneAway = (string1, string2) => {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') return false;
  const length1 = string1.length;
  const length2 = string2.length;
  if (length1 === length2 || (length1 + 1) === length2 || (length1 - 1) === length2) return true;
  else return false;
}
const tester = (actual, expected) => {
  if (actual === expected) console.log('passed');
  else console.log('failed');
};
tester(isOneAway('tact', 'tact'), true);
tester(isOneAway('tact', 'taC+1'), true);
tester(isOneAway('Tact', 't-1'), true);
tester(isOneAway('jfdt', 'tact+2'), false);

