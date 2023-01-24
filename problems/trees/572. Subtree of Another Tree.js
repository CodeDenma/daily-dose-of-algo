
// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// Solution 1
// t: mn | s: m + n
var isSubtree = function (root, subRoot) {
  function isSameTree(treeOne, treeTwo) {
    if (!treeOne || !treeTwo) {
      return !treeOne && !treeTwo;
    }

    if (treeOne.val !== treeTwo.val) {
      return false;
    }

    return (isSameTree(treeOne.left, treeTwo.left) && isSameTree(treeOne.right, treeTwo.right));
  }

  stack = [root];

  while (stack.length) {
    node = stack.pop();

    if (!node) {
      continue;
    }

    if (isSameTree(node, subRoot)) {
      return true;
    }

    stack.push(node.left, node.right);
  }

  return false;
};



// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// Solution 2
// t: m + n | s: m + n
var isSubtree = function (root, subRoot) {
  const MOD1 = 11311;
  const MOD2 = 11411;

  function hash(node, toAdd) {
    if (!node) {
      return [-1, -1];
    }

    const left = hash(node.left, toAdd);
    const right = hash(node.right, toAdd);

    const left1 = (left[0] << 2) % MOD1;
    const right1 = (right[0] << 1) % MOD1;
    const left2 = (left[1] << 3) % MOD2;
    const right2 = (right[1] << 1) % MOD2;

    const hashPair = [(left1 + right1 + node.val) % MOD1, (left2 + right2 + node.val) % MOD2];

    if (toAdd) {
      memo.add(hashPair);
    }

    return hashPair;
  }

  const memo = new Set();

  hash(root, true);


  const subRootHash = hash(subRoot, false);

  console.log(memo);
  console.log(subRootHash);

  const [subRootLeft, subRootRight] = subRootHash;

  for (hash of memo) {
    const [left, right] = hash;

    if (left === subRootLeft && right === subRootRight) {
      return true;
    }
  }

  return false;

};