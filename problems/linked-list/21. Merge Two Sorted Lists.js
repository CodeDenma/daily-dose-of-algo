/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// O(n) Time | O(1) Space
var mergeTwoLists = function (list1, list2) {
  const dummyHead = new ListNode(-1)

  let node = dummyHead, val1, val2

  while (list1 || list2) {
    list1 !== null ? val1 = list1.val : val1 = Infinity
    list2 !== null ? val2 = list2.val : val2 = Infinity

    if (val1 < val2) {
      node.next = new ListNode(val1)
      list1 = list1.next
    } else {
      node.next = new ListNode(val2)
      list2 = list2.next
    }

    node = node.next
  }

  return dummyHead.next
};