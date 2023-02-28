/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

// O(n) Time | O(1) Space
var reorderList = function(head) {
    let slow = head, fast = head.next

    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }

    let second = slow.next
    let prevNode = null

    slow.next = null

    while (second) {
      const secondNext = second.next

      second.next = prevNode
      prevNode = second
      second = secondNext
    }

    let first = head
    second = prevNode

    while (second) {
      const [firstNext, secondNext] = [first.next, second.next]

      first.next = second
      second.next = firstNext

      first = firstNext
      second = secondNext
    }

    return head
};