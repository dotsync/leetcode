// Linked List Cycle
var hasCycle = function(head) {
  if (head == null) return false
  let slowRunner = head;
  let fastRunner = head.next;
  while(slowRunner != fastRunner) {
      if (fastRunner == null || fastRunner.next == null) {
          return false;
      }
      slowRunner = slowRunner.next;
      fastRunner = fastRunner.next.next;
  }
  return true
};
