/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// ? O(n) Time | O(n) Space
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const rootNode = new TreeNode(preorder[0]);
  const rootIdx = inorder.indexOf(preorder[0]);

  rootNode.left = buildTree(
    preorder.slice(1, rootIdx + 1),
    inorder.slice(0, rootIdx)
  );
  rootNode.right = buildTree(
    preorder.slice(rootIdx + 1),
    inorder.slice(rootIdx + 1)
  );

  return rootNode;
};
