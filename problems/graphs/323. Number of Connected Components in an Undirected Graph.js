/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

 

// Example 1:


// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
// Example 2:


// Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
// Output: 1
 

// Constraints:

// 1 <= n <= 2000
// 1 <= edges.length <= 5000
// edges[i].length == 2
// 0 <= ai <= bi < n
// ai != bi
// There are no repeated edges.


var countComponents = function(n, edges) {
    const unionFind = new UnionFind()
    
    for (const [nodeOne, nodeTwo] of edges) {
      // group (unionize) all of the connections based on the edges provided
      unionFind.union(nodeOne, nodeTwo)
    }

    const groups = new Set()

    // loop thru all of the nodes in the graph
    for (let node = 0; node < n; node++) {
      // find the group where the node belongs to
      const group = unionFind.find(node)

      groups.add(group)
    }

    return groups.size
};

// Simple Union Find (No Ranks)
class UnionFind {
  constructor() {
    // key: node | value: groupNode
    // groupNode: node that is used to represent the entire group
    // in other words, groupNode is the go-to-node for identifying the group
    // the key/value pair of the group node will be: { groupNode: groupNode }
    this.nodeToGroup = {}
  }

  // find the group that the node belongs to (aka find the groupNode)
  find(node) {
    // optional: didn't want to write this.nodeToGroup multiple times
    const nodeToGroup = this.nodeToGroup

    // if the node doesn't exist in the nodeToGroup, set its default to itself because one node can be its own group
    if (!(node in nodeToGroup)) {
      nodeToGroup[node] = node
    }

    // if the node was the groupNode... node === nodeToGroup[node]
    // since we didn't find the groupNode yet
    if (node !== nodeToGroup[node]) {
      // keep looking for it (recursion) until you find it and set it as the groupNode of node
      nodeToGroup[node] = this.find(nodeToGroup[node])
    }

    // once you found the groupNode, return it
    return nodeToGroup[node]
  }

  // grouping two nodes to a single group
  union(nodeOne, nodeTwo) {
    const nodeToGroup = this.nodeToGroup

    const groupOne = this.find(nodeOne)
    const groupTwo = this.find(nodeTwo)

    // group (unionize) groupOne (where nodeOne belongs) and groupTwo(where nodeTwo belongs) under groupTwo
    // NOTE: if you want to join two groups under the name of groupOne...
    // nodeToGroup[groupTwo] = groupOne
    nodeToGroup[groupOne] = groupTwo
  }
  
  // check if nodeOne and nodeTwo are part of the same group
  connected(nodeOne, nodeTwo) {
    return this.find(nodeOne) === this.find(nodeTwo)
  }
}