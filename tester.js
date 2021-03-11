assertEqual = (actual, expected) => {
  if (actual === expected) console.log('passed');
  else console.log('failed');
};

module.exports = assertEqual;
