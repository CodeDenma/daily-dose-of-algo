/**
 * @param {string} s
 * @return {string[][]}
 */

// neetcode
// Time: O(n * 2^n) | Space: O(n)
var partition = function(s) {
  const palindromePartitions = []
  const currentPartition = []

  function backtrack(start) {
    if (start === s.length) {
      palindromePartitions.push(currentPartition.slice())
      return
    }
    
    // iterate through all the substring from starting index to the ending index
    // if the string from starting index to ending index is a palindrome, push it into currentPartition and backtrack to find potential palindromic substrings starting from the next index
    for (let end = start; end < s.length; end++) {
      if (isPalindrome(s, start, end)) {
        currentPartition.push(s.slice(start, end + 1))
        backtrack(end + 1)
        currentPartition.pop()
      }
    }
  }

  function isPalindrome(s, start, end) {
    while (start < end) {
      if (s[start] != s[end]) {
        return false
      }
      
      start++
      end--
    }
    return true
  }

  backtrack(0)

  return palindromePartitions
};


// leetcode solution
// Time: O(n * n^2) | Space: O(n^2)
var partition = function(s) {
  const palindromePartitions = []
  const currentPartition = []
  
  // row: starting index | col: ending index
  const dp = Array.from(Array(s.length), () => Array(s.length))


  function backtrack(start) {
    if (start === s.length) {
      palindromePartitions.push(currentPartition.slice())
      return
    }

    for (let end = start; end < s.length; end++) {
      // s[start] === s[end]: if the ends of substring can potentially form a palindrome
      // end - start <= 2: if this condition satisfies (alongside s[start] === s[end]), the substring is guaranteed to be a palindrome
      // end - start == 2: 3 characters where both ends match (i.e. aba)
      // end - start == 1: 2 characters where both ends match (i.e. aa)
      // end - start == 0: 1 character where start and end both point to the same character (i.e. a)
      // dp[start + 1][end - 1]: true if the immediate inner characters match
      // i.e. abcba => start = 0, end = 4 -> both 'a's match | start + 1 = 1, end = 3 -> both 'b's match
      if (s[start] === s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
        // if there's a potential partition to be made...
        dp[start][end] = true

        // push the current substring into the partition
        currentPartition.push(s.slice(start, end + 1))
        // try the remaining partitions
        backtrack(end + 1)
        // take out the substring we tried
        currentPartition.pop()
      }
    }
  }

  backtrack(0)

  return palindromePartitions
};

// console.log(partition('aab'));
console.log(partition('abcba'));