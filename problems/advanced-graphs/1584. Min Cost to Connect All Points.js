const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');


/**
 * @param {number[][]} points
 * @return {number}
 */

// Prim's Algorithm
// O(n^2 * log(n)) Time | O(n^2) Space
var minCostConnectPoints = function (points) {
  function getManhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  function isSamePoints(x1, y1, x2, y2) {
    return (x1 === x2 && y1 === y2);
  }

  // comparison function for creating each node in the minHeap ({ node, dist })
  // we want the minimum distance in the heap at every time
  const pointCompare = (a, b) => a.dist < b.dist;
  // create a heap that starts with node 0 (points[0])
  // dist = 0 means the distance from node 0 (points[0]) to itself is 0
  const minHeap = new Heap([{ node: 0, dist: 0 }], pointCompare);

  // alternatively, you can create an empty heap and push the { node: 0, dist: 0 } into it
  // minHeap.heappush({ node: 0, dist: 0 })

  const n = points.length; // NOTE: not necessary just looks prettier imo
  const visited = new Set();

  let minimumSpanningTreeDistance = 0;

  while (visited.size < n) {
    // grab the closest node from the last node in the while loop
    // by connecting the closest nodes each time, we'll eventually form the MST (Minimum Spanning Tree)
    // MST: the tree with the minimum sum of distances given a set of nodes and distances between them
    const { node, dist } = minHeap.heappop();

    if (visited.has(node)) continue;

    minimumSpanningTreeDistance += dist;
    visited.add(node);

    const [x1, y1] = points[node];

    for (let neighbor = 0; neighbor < points.length; neighbor++) {
      const [x2, y2] = points[neighbor];

      if (isSamePoints(x1, y1, x2, y2) || visited.has(neighbor)) continue;

      const dist = getManhattanDistance(x1, y1, x2, y2);

      minHeap.heappush({ node: neighbor, dist });
    }
  }

  return minimumSpanningTreeDistance;
};

const swap = (heap, i, j) => [heap[i], heap[j]] = [heap[j], heap[i]];

class Heap {
  constructor(array, compare) {
    this.compare = compare;
    this.heap = this.heapify(array);
    this.length = array.length;
  }

  heapify(array) {
    const endIdx = array.length - 1;
    const firstParentIdx = Math.floor((endIdx - 1) / 2);

    for (let parentIdx = firstParentIdx; parentIdx >= 0; parentIdx--) {
      this.siftDown(array, parentIdx, endIdx);
    }

    return array;
  }

  siftDown(heap, parentIdx, endIdx) {
    let childOneIdx = parentIdx * 2 + 1;
    let childTwoIdx, idxToSwap;

    while (childOneIdx <= endIdx) {
      parentIdx * 2 + 2 <= endIdx ? childTwoIdx = parentIdx * 2 + 2 : childTwoIdx = -1;

      if (childTwoIdx !== -1 && this.compare(heap[childTwoIdx], heap[childOneIdx])) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (this.compare(heap[idxToSwap], heap[parentIdx])) {
        swap(heap, idxToSwap, parentIdx);
        parentIdx = idxToSwap;
        childOneIdx = parentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  heappush(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.heap, this.length - 1);
  }

  siftUp(heap, childIdx) {
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (childIdx > 0 && this.compare(heap[childIdx], heap[parentIdx])) {
      swap(heap, childIdx, parentIdx);
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx - 1) / 2);
    }
  }

  heappop() {
    swap(this.heap, 0, this.length - 1);
    const poppedItem = this.heap.pop();
    this.length--;

    this.siftDown(this.heap, 0, this.length - 1);

    return poppedItem;
  }
}





// Prim's Algorithm Optimized
// O(n^2) Time | O(n) Space
var minCostConnectPoints = function (points) {
  function getManhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  function isSamePoints(x1, y1, x2, y2) {
    return (x1 === x2 && y1 === y2);
  }

  const n = points.length; // NOTE: not necessary just looks prettier imo
  const visited = new Set();

  const minDists = new Array(points.length).fill(Infinity);

  // set the min distance from node 0 to itself 0
  minDists[0] = 0;

  let minimumSpanningTreeDistance = 0;

  while (visited.size < n) {
    // placeholders (dummy node, distance) that will be reassigned into the minimum distance node
    let minNode = -1, minDist = Infinity;

    // find the minNode, minDist
    for (let node = 0; node < minDists.length; node++) {
      if (visited.has(node)) continue;

      const dist = minDists[node];

      if (dist < minDist) {
        minDist = dist;
        minNode = node;
      }
    }

    minimumSpanningTreeDistance += minDist;
    visited.add(minNode);

    const [x1, y1] = points[minNode];

    // update minDists in case the minNode is closer to the distance in minDists
    for (let neighbor = 0; neighbor < points.length; neighbor++) {
      const [x2, y2] = points[neighbor];

      if (isSamePoints(x1, y1, x2, y2) || visited.has(neighbor)) continue;

      const dist = getManhattanDistance(x1, y1, x2, y2);
      minDists[neighbor] = Math.min(minDists[neighbor], dist);
    }
  }

  return minimumSpanningTreeDistance;
};


console.log(minCostConnectPoints([[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]])); // 20

// console.log(Number(4 === 4));


// Kruskal's Algorithm
// O(n^2 * log(n)) Time | O(n^2) Space
class UnionFind {
  constructor() {
    // key: node | value: groupNode
    // groupNode: node that is used to represent the entire group
    // in other words, groupNode is the go-to-node for identifying the group
    // the key/value pair of the group node will be: { groupNode: groupNode }
    this.nodeToGroup = {};
  }

  // find the group that the node belongs to (aka find the groupNode)
  find(node) {
    // optional: didn't want to write this.nodeToGroup multiple times
    const nodeToGroup = this.nodeToGroup;

    // if the node doesn't exist in the nodeToGroup, set its default to itself because one node can be its own group
    if (!(node in nodeToGroup)) {
      nodeToGroup[node] = node;
    }

    // if the node was the groupNode... node === nodeToGroup[node]
    // since we didn't find the groupNode yet
    if (node !== nodeToGroup[node]) {
      // keep looking for it (recursion) until you find it and set it as the groupNode of node
      nodeToGroup[node] = this.find(nodeToGroup[node]);
    }

    // once you found the groupNode, return it
    return nodeToGroup[node];
  }

  // grouping two nodes to a single group
  union(nodeOne, nodeTwo) {
    const nodeToGroup = this.nodeToGroup;

    const groupOne = this.find(nodeOne);
    const groupTwo = this.find(nodeTwo);

    // return true to indicate that the groupOne and groupTwo were already grouped together
    if (groupOne === groupTwo) return true;

    // group (unionize) groupOne (where nodeOne belongs) and groupTwo(where nodeTwo belongs) under groupTwo
    // NOTE: if you want to join two groups under the name of groupOne...
    // nodeToGroup[groupTwo] = groupOne
    nodeToGroup[groupOne] = groupTwo;

    // return false to indicate that groupOne and groupTwo were NOT grouped previously and we just grouped them
    return false;
  }

  // check if nodeOne and nodeTwo are part of the same group
  connected(nodeOne, nodeTwo) {
    return this.find(nodeOne) === this.find(nodeTwo);
  }
}



var minCostConnectPoints = function (points) {
  const edges = []; // [(weight, node1, node2)]

  function getManhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  // insert all possible edges into 'edges' array
  for (let node = 0; node < points.length; node++) {
    const [x1, y1] = points[node];

    for (let neighborNode = node + 1; neighborNode < points.length; neighborNode++) {
      const [x2, y2] = points[neighborNode];

      const dist = getManhattanDistance(x1, y1, x2, y2);
      edges.push({ dist, node, neighborNode });
    }
  }

  // sort out the edges in ascending order of dist (distance)
  edges.sort((a, b) => a.dist - b.dist);

  const unionFind = new UnionFind();
  let output = 0;
  edgesUsed = 0;

  for (const { dist, node, neighborNode } of edges) {
    // if union() returns false, it means that we just drew out an edge in the MST (Minimum Spanning Tree) so we values accordingly
    if (!unionFind.union(node, neighborNode)) {
      output += dist;
      edgesUsed++;

      // if we drew out (n - 1) edges, we're done
      // n: number of nodes | (n - 1): number of edges in the MST
      if (edgesUsed === points.length - 1) break;
    }
  }
  return output;
};










// ! https://github.com/datastructures-js/priority-queue/issues/21 LeetCode Compatibility issue with Priority Queue
// O(n^2 * log(n)) Time | O(n^2) Space
// var minCostConnectPoints = function (points) {
//   let output = 0;

//   function getManhattanDistance(x1, y1, x2, y2) {
//     return Math.abs(x1 - x2) + Math.abs(y1 - y2);
//   }

//   const minHeap = new PriorityQueue((a, b) => a.dist - b.dist); // { node, dist }

//   minHeap.enqueue({
//     node: 0,
//     dist: 0
//   });

//   const visited = new Set();
//   const n = points.length;

//   while (visited.size < n) {
//     const { node, dist } = minHeap.dequeue();

//     if (visited.has(node)) continue;

//     visited.add(node);

//     output += dist;

//     const [x1, y1] = points[node];

//     for (let neighbor = 0; neighbor < points.length; neighbor++) {
//       const [x2, y2] = points[neighbor];

//       if ((x1 === x2 && y1 === y2) || visited.has(neighbor)) continue;

//       const dist = getManhattanDistance(x1, y1, x2, y2);

//       minHeap.enqueue({
//         node: neighbor,
//         dist: dist
//       });
//     }
//   }

//   return output;
// };