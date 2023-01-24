const _ = require('lodash');
const { PriorityQueue, MinPriorityQueue, MaxPriorityQueue } = require('@datastructures-js/priority-queue');
const { Queue } = require('@datastructures-js/queue');

// Solution 1
// O(nklog(k)) Time
// n: number of words in strs | k: length of the longest word
var groupAnagrams = function (strs) {
  const anagramGroups = {};

  // loop thru all the words in strs
  for (const word of strs) {
    // create the sortedWord (characters of the word sorted in alphabetical order)
    const sortedWord = [...word].sort().join('');

    // ! populating anagramGroups option 1
    if (!(anagramGroups[sortedWord])) {
      anagramGroups[sortedWord] = [];
    }

    anagramGroups[sortedWord].push(word);

    // ! populating anagramGroups option 2
    // NOTE: .concat() returns a new array while push returns the length of the updated array
    // anagramGroups[sortedWord] = (anagramGroups[sortedWord] ?? []).concat(word);
  }

  return Object.values(anagramGroups);
};

// Solution 2
// O(nk) Time
// n: length of strs | k: length of the longest word
var groupAnagrams = function (strs) {
  const anagramGroups = {};

  // loop thru all the words in strs
  for (const word of strs) {
    // ! populating counter option 1
    // 26: number of letters in the alphabet
    // Ex: counter[0] => number of 'a's in the current word
    // 0 => first index of the array <=> first letter of alphabet
    const counter = new Array(26).fill(0);

    for (const char of word) {
      const charCode = char.charCodeAt();

      // if using this option, you can also declare the 'a'.charCodeAt() outside of the loops to avoid repeated computation of the 'a'.charCodeAt()
      const position = charCode - 'a'.charCodeAt();

      counter[position]++;
    }


    // ! populating counter option 2
    // const counter = {};

    // for (let charCode = 'a'.charCodeAt(); charCode <= 'z'.charCodeAt(); charCode++) {
    //   const char = String.fromCharCode(charCode);

    //   counter[char] = 0;
    // }

    // for (const char of word) {
    //   counter[char] = (counter[char] ?? 0) + 1;
    // }

    // create a uniquely identifying string for the counter
    // ! option 1
    const group = JSON.stringify(counter);
    // ! option 2
    // const group = String.fromCharCode(...counter)
    // ! option 3
    // const group = counter.join()

    // if the group doesn't exist in anagramGroups, initialize its value as an array (list of words that are anagrams of each other)
    if (!(group in anagramGroups)) anagramGroups[group] = [];

    anagramGroups[group].push(word);
  }

  return Object.values(anagramGroups);
};
