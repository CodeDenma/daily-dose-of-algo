/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// O(n) Time | O(n) Space
var maxPathSum = function (root) {
  let output = -Infinity;

  function helper(node) {
    if (!node) return 0;

    const leftSum = Math.max(0, helper(node.left));
    const rightSum = Math.max(0, helper(node.right));
    output = Math.max(output, leftSum + rightSum + node.val);

    return Math.max(leftSum, rightSum) + node.val;
  }

  helper(root);
  return output;
};
