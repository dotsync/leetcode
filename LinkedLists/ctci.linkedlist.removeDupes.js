const util = require('util')
const LinkedList = require('./LinkedList');

const listMadeFromValues = LinkedList.createListFromValues(10, 20, 30, 40, 50)

console.log(util.inspect(listMadeFromValues, false, null, true))

// Remove Dupes (2.1)

// Time
// Space
