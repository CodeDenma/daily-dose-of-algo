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

// Union Find (With Ranks)
class UnionFind {
  constructor(n) {
    // key: node | value: groupNode
    // groupNode: node that is used to represent the entire group
    // in other words, groupNode is the go-to-node for identifying the group
    // the key/value pair of the group node will be: { groupNode: groupNode }
    this.nodeToGroup = {}

    // key: group | value: rank (i.e. size of the group)
    // rank will be used to determine how to join two groups
    // if groupOne has higher rank: groupOne and groupTwo will be unionized (joined) under groupOne
    // if groupTwo has higher rank: groupOne and groupTwo will be unionized (joined) under groupTwo
    // if groupOne and groupTwo have the same rank: you can arbitrarily pick a group to represent both groupOne and groupTwo (see below for implementation)
    this.groupToRank = {}

    // alternative option 1: populate the objects
    // you can populate the nodes in the find() method instead
    for (let node = 0; node < n; node++) {
      // at initialization, each node will be its own group (because we haven't joined nodes into groups via union() yet)
      this.nodeToGroup[node] = node

      // since each node is its own group (smallest group size), initialize it to 1 (lowest possible rank)
      this.groupToRank[node] = 1
    }
  }

  // find the group that the node belongs to (aka find the groupNode)
  find(node) {
    // optional: didn't want to write this.nodeToGroup multiple times
    const nodeToGroup = this.nodeToGroup
    const groupToRank = this.groupToRank

    // alternative option 2: initializing a node and its rank at find()
    // this also eliminates the need for the constructor to take the argument of n
    // if (!(node in nodeToGroup)) {
    //   // if the node doesn't exist in the nodeToGroup, set its default to itself because one node can be its own group
    //   nodeToGroup[node] = node

    //   // since each node is its own group (smallest group size), initialize it to 1 (lowest possible rank)
    //   groupToRank[node] = 1
    // }

    // if the node was the groupNode... node === nodeToGroup[node]
    // while we haven't found the groupNode (iterate until we found the groupNode)
    while (node !== nodeToGroup[node]) {
      // optional: path compression optimization
      // in short, this while loop will execute 2n times (if the while condition was satisfied) so take 2 steps of traversal at each iteration
      const parent = nodeToGroup[node]
      // instead of moving the node to its parent at each iteration, move the node to its grandparents (take 2 steps instead of 1)
      nodeToGroup[node] = nodeToGroup[parent]

      // traverse the node to its parent (without path compression) or grandparent (with path compression)
      node = nodeToGroup[node]
    }

    // return the group where the node belongs to
    return nodeToGroup[node]
  }

  union(nodeOne, nodeTwo) {
    const nodeToGroup = this.nodeToGroup
    const groupToRank = this.groupToRank

    const groupOne = this.find(nodeOne)
    const groupTwo = this.find(nodeTwo)

    if (groupOne === groupTwo) {
      // returning true
      // 1. nodeOne and nodeTwo were already in the same group before trying to unionize (join) them
      // 2. we don't have to unionize (join) them before returning anymore
      return true
    }

    // joining two groups
    if (groupToRank[groupOne] > groupToRank[groupTwo]) {
      // if groupOne ranks higher than groupTwo, join groupOne and groupTwo under groupOne
      nodeToGroup[groupTwo] = groupOne
    } else if (groupToRank[groupTwo] > groupToRank[groupOne]) {
      // if groupTwo ranks higher than groupOne, join groupOne and groupTwo udner groupTwo
      nodeToGroup[groupOne] = groupTwo
    } else {
      // if groupOne ranks the same as groupTwo...
      // join groupOne and groupTwo under groupTwo (chosen arbitrarily)
      nodeToGroup[groupOne] = groupTwo
      // since the groupTwo just grew in size, increment its rank by 1
      groupToRank[groupTwo]++

      // NOTE: if you want to join groupOne and groupTwo under groupOne...
      // nodeToGroup[groupTwo] = groupOne
      // groupToRank[groupOne]++
    }

    // returning false: nodeOne and nodeTwo were NOT in the same group AND we just joined them
    return false
  }
}