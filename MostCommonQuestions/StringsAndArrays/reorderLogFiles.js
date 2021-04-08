/* eslint-disable max-len */
const reorderLogFiles = (logs) => {
  const digitLogs = [];
  const letterLogs = [];
  // divide logs into two catagories based on whether or not the last element is a digit or string
  for (const log of logs) {
    if (Number.isInteger(log[log.length -1] * 1)) digitLogs.push(log);
    else letterLogs.push(log);
  }
  // sort each log
  letterLogs.sort(function(a, b) {
    if (a.split(' ')[1].localeCompare(b.split(' ')[1]) === 0 && a.split(' ')[2].localeCompare(b.split(' ')[2])=== 0) {
      return a.split(' ')[0].localeCompare(b.split(' ')[0]);
    } else {
      return a.split(' ')[1].localeCompare(b.split(' ')[1]) || a.split(' ')[2].localeCompare(b.split(' ')[2]);
    }
  });
  // combine logs
  return letterLogs.concat(digitLogs);
};

module.exports = reorderLogFiles;
