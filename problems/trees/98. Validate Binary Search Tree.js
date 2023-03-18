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
 * @return {boolean}
 */
// O(n) Time | O(n) Space
var isValidBST = function (root) {
  function helper(node, minVal, maxVal) {
    if (!node) return true;

    if (!(minVal < node.val && node.val < maxVal)) {
      return false;
    }

    return (
      helper(node.left, minVal, node.val) &&
      helper(node.right, node.val, maxVal)
    );
  }

  return helper(root, -Infinity, Infinity);
};
