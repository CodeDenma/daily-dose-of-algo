// O(1) Time | O(1) Space
var Trie = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
// O(n) Time | O(1) Space
Trie.prototype.insert = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node.hasOwnProperty(char)) {
      node[char] = {};
    }

    node = node[char];
  }

  return (node["*"] = word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
// O(n) Time | O(1) Space
Trie.prototype.search = function (word) {
  let node = this.root;

  for (const char of word) {
    if (!node.hasOwnProperty(char)) return false;

    node = node[char];
  }

  return node.hasOwnProperty("*");
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
// O(n) Time | O(1) Space
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;

  for (const char of prefix) {
    if (!node.hasOwnProperty(char)) return false;

    node = node[char];
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
