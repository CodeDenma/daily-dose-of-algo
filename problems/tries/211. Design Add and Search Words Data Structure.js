var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!this.root.hasOwnProperty(word.length)) {
    this.root[word.length] = new Set();
  }

  this.root[word.length].add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!word.length) return false;
  else if (word.split("").every((char) => char != ".")) {
    return this.root.hasOwnProperty(word);
  }

  for (const candidate of this.root[word.length]) {
    let notFound = false;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (char !== "." && char !== candidate[i]) {
        notFound = true;
        break;
      }
    }

    if (!notFound) return true;
  }

  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
