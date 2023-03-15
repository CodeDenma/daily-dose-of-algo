/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// O(n) Time | O(1) Space
var lowestCommonAncestor = function (root, p, q) {
  let node = root;
  if (p.val > q.val) {
    const temp = p;
    p = q;
    q = temp;
  }

  while (!(p.val <= node.val && node.val <= q.val)) {
    if (p.val < node.val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }

  return node;
};
