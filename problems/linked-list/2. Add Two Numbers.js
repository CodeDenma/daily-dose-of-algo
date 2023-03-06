/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// O(max(m, n)) Time | O(1) Space
// m: length of l1 | n: length of l2
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  const dummy = new ListNode(0);

  let node = dummy;

  let val1, val2;

  console.log(dummy.next)

  while (l1 || l2 || carry) {
    l1 ? val1 = l1.val : val1 = 0
    l2 ? val2 = l2.val : val2 = 0

    const newVal = (val1 + val2 + carry) % 10;
    carry = Math.floor((val1 + val2 + carry) / 10)

    node.next = new ListNode(newVal)

    node = node.next

    l1 !== null ? l1 = l1.next : l1 = null;
    l2 !== null ? l2 = l2.next : l2 = null;
  }

  return dummy.next
};