/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// O(n) Time | O(n) Space
var copyRandomList = function(head) {
  const oldToCopy = new Map();
  oldToCopy.set(null, null)
  
  let node = head;

  while (node) {
    const copyNode = new Node(node.val)
    oldToCopy.set(node, copyNode)
    
    node = node.next
  }

  node = head

  while (node) {
    // set up next pointers
    const copyNode = oldToCopy.get(node)
    copyNode.next = oldToCopy.get(node.next)
    
    // set up random pointers
    const copyRandom = oldToCopy.get(node.random)
    copyNode.random = copyRandom
    
    node = node.next
  }

  return oldToCopy.get(head)
};