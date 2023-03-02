/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// O(n) Time | O(1) Space
var removeNthFromEnd = function(head, n) {
  const dummyHead = new ListNode(-Infinity, head)
  
  let slowNode = dummyHead, fastNode = dummyHead

  for (let i = 0; fastNode && i < n; i++) {
    fastNode = fastNode.next;
  }

  while (fastNode.next) {
    slowNode = slowNode.next
    fastNode = fastNode.next
  }

  slowNode.next = slowNode.next?.next

  return dummyHead.next
};