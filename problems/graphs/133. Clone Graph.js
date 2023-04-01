/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const nodeToCopy = new Map();
  nodeToCopy.set(null, null);

  function dfs(currNode) {
    if (!currNode || nodeToCopy.get(currNode)) return;

    nodeToCopy.set(currNode, new Node(currNode.val));

    for (const neighborNode of currNode.neighbors) {
      dfs(neighborNode);

      const copyNode = nodeToCopy.get(currNode);
      const copyNeighborNode = nodeToCopy.get(neighborNode);

      copyNode.neighbors.push(copyNeighborNode);
    }
  }

  dfs(node);
  return nodeToCopy.get(node);
};
