const util = require('util')
const LinkedList = require('./LinkedList');

const list = new LinkedList
list.addAtHead(300)
list.addAtHead(200)
list.addAtHead(100)
// console.log(list)
console.log(util.inspect(list, { showHidden: false, depth: null }))


// Remove Dupes (2.1)

// Time
// Space
