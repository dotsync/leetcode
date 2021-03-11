const LinkedList = require('./LinkedList');
// Custom Debugging Scenario
// Remove Dupes (2.1)

// Sets up the initial problem with a custom test case
const customTestCase = [10, 10, 20, 30, 10, 40]
const duplicates = LinkedList.createListFromValues(...customTestCase)
// Prints the unsolved problem
duplicates.printList()
// Applies the method to the custom test case
duplicates.removeDupes();
// Prints the solved Problem
console.log('\n\n\n\n\n\nSolution:')
duplicates.printList();
// Time
// Space
