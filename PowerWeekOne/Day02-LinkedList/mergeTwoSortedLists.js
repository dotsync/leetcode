const mergeTwoSortedLists = (list1Head, list2Head) => {
  // create temp head node to attach new list to
  const preHead = {
    data: -1,
    next: null,
  }
  let current = preHead;
  // iterate both lists while at least one of the lists still has items
  while (list1Head != null && list2Head != null) {
    if (list1Head.data <= list2Head.data) {
      current.next = list1Head;
      list1Head = list1Head.next;
    } else {
      current.next = list2Head;
      list2Head = list2Head.next
    }
    current = current.next
  }
  // if list1 or list2 still has items, append to the end of current
  if (list1Head != null) {
    current.next = list1Head;
  } else if (list2Head != null) {
    current.next = list2Head;
  }
  // return the temp head nodes next property to return full list
  return preHead.next
}

module.exports = mergeTwoSortedLists;
