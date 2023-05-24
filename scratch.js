


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const wordBank = {};

  for (const word of strs) {
    const sortedWord = word.split('').sort();

    wordBank[sortedWord] = (wordBank[sortedWord] ?? []).concat(word);
  }


  return Object.values(wordBank);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

var groupAnagrams = function(strs) {
  const wordBank = {};
  const aCharCode = "a".charCodeAt();
  
  for (const word of strs) {
    const alphabets = new Array(26).fill(0);
    
    
    for (const char of word) {
      const index = char.charCodeAt() - aCharCode;

      alphabets[index]++;
    }

    const key = JSON.stringify(alphabets);

    wordBank[key] = (wordBank[key] ?? []).concat(word);
  }
  
  return Object.values(wordBank);
}