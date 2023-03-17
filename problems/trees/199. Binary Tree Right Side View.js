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
 * @return {number[]}
 */
// O(n) Time | O(n) Space
var rightSideView = function (root) {
  const output = [];
  const queue = [root];

  while (queue.length) {
    const queueLength = queue.length;
    const level = [];

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();

      if (!node) continue;

      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (level.length) output.push(level[level.length - 1]);
  }

  return output;
};
