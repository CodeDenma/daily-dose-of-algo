/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// O(n) Time | O(n) Space
var serialize = function (root) {
  const output = [];

  function dfs(node) {
    if (!node) {
      output.push("N");
      return;
    }

    output.push(String(node.val));
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return output.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// O(n) Time | O(n) Space
var deserialize = function (data) {
  const values = data.split(",");
  let index = 0;

  function dfs() {
    if (values[index] === "N") {
      index++;
      return null;
    }

    const node = new TreeNode(+values[index++]);

    node.left = dfs();
    node.right = dfs();

    return node;
  }

  return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
