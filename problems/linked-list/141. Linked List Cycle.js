const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// O(n) Time | O(1) Space
var hasCycle = function(head) {
  let slowNode = head, fastNode = head;

  while (fastNode && fastNode.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;

    if (slowNode === fastNode) {
      return true;
    }
  }

  return false
};

// O(n) Time | O(n) Space
var hasCycle = function(head) {
  let node = head;
  const cache = new Set();

  while (node) {
    if (cache.has(node)) {
      return true;
    }

    cache.add(node);

    node = node.next;
  }

  return false
};