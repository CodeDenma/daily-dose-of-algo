const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// O(m + n) Time | O(1) Space
// m: length of list1 | n: length of list2
var mergeKLists = function(lists) {
    let output = lists;

    function mergeTwoLists(listOne, listTwo) {
      let node1 = listOne, node2 = listTwo;
      const dummyHead = new ListNode(-Infinity)
      let node = dummyHead;
      let val1, val2;

      while (node1 && node2) {
        val1 = node1.val;
        val2 = node2.val;

        if (val1 < val2) {
          node.next = node1;
          node1 = node1.next;
        } else {
          node.next = node2;
          node2 = node2.next;
        }

        node = node.next;
      }

      if (node1) {
        node.next = node1;
      } else {
        node.next = node2;
      }

      return dummyHead.next;
    }
    
    while (output.length > 1) {
      const merged = [];

      for (let i = 0; i < output.length; i += 2) {
        let listOne, listTwo;

        listOne = output[i]
        i + 1 < output.length ? listTwo = output[i + 1] : listTwo = null;

        merged.push(mergeTwoLists(listOne, listTwo))
      }
      output = merged;
    }

    return output.length ? output[0] : null;
}