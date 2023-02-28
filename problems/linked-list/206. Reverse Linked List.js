/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


// O(n) Time | O(1) Space
var reverseList = function (head) {
  let prevNode = null, node = head;
  let nextNode = null;

  while (node) {
    nextNode = node.next;
    node.next = prevNode;
    prevNode = node;

    node = nextNode;
  }

  return prevNode;
};
