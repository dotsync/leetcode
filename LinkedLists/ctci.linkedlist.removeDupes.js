const LinkedList = require('./LinkedList');
// Custom Debugging Scenario
// Remove Dupes (2.1)

// Sets up the initial problem with a custom test case
const customTestCase = [10, 10, 20, 30, 10, 40]
const customTestCase2 = ['a', 'a', 'c', 'a', 'a', 'c', 'a']
const duplicates = LinkedList.createListFromValues('a', 'a', 'c', 'a', 'a', 'c', 'a')
// Prints the unsolved problem
// duplicates.printList()
// Applies the method to the custom test case
duplicates.removeDupes();
// Time
// Space
