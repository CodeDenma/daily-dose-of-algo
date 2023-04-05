/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

class UnionFind {
  constructor() {
    this.nodeToGroup = {};
  }

  find(node) {
    const nodeToGroup = this.nodeToGroup;

    if (!(node in nodeToGroup)) {
      nodeToGroup[node] = node; // key: node | value: its group
    }

    if (node !== nodeToGroup[node]) {
      nodeToGroup[node] = this.find(nodeToGroup[node]);
    }

    return nodeToGroup[node];
  }

  union(node1, node2) {
    const nodeToGroup = this.nodeToGroup;

    const group1 = this.find(node1);
    const group2 = this.find(node2);

    if (group1 === group2) {
      return true;
    }

    nodeToGroup[group1] = group2;

    return false;
  }
}

var validTree = function (n, edges) {
  if (n !== edges.length + 1) return false;

  const unionFind = new UnionFind();

  for (const [node1, node2] of edges) {
    if (unionFind.union(node1, node2)) {
      // true: they were already connected
      return false; // not a tree
    }
  }

  return true;
};
