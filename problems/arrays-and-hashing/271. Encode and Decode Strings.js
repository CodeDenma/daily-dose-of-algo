// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Machine 1 (sender) has the function:

// string encode(vector<string> strs) {
//   // ... your code
//   return encoded_string;
// }
// Machine 2 (receiver) has the function:
// vector<string> decode(string s) {
//   //... your code
//   return strs;
// }
// So Machine 1 does:

// string encoded_string = encode(strs);
// and Machine 2 does:

// vector<string> strs2 = decode(encoded_string);
// strs2 in Machine 2 should be the same as strs in Machine 1.

// Implement the encode and decode methods.

// You are not allowed to solve the problem using any serialize methods (such as eval).



// Example 1:

// Input: dummy_input = ["Hello","World"]
// Output: ["Hello","World"]
// Explanation:
// Machine 1:
// Codec encoder = new Codec();
// String msg = encoder.encode(strs);
// Machine 1 ---msg---> Machine 2

// Machine 2:
// Codec decoder = new Codec();
// String[] strs = decoder.decode(msg);
// Example 2:

// Input: dummy_input = [""]
// Output: [""]


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] contains any possible characters out of 256 valid ASCII characters.


// Follow up: Could you write a generalized algorithm to work on any possible set of characters?



// Method 1: JSON
// O(n) Time | O(1) Space
var encode = function (strs) {
  return JSON.stringify(strs);
};

// O(n) Time | O(1) Space
var decode = function (s) {
  return JSON.parse(s);
};




// Method 2: Unique Delimeter
// O(n) Time | O(1) Space
var encode = function (strs) {
  const delimiter = String.fromCharCode(257);

  return strs.join(delimiter);
};

// O(n) Time | O(1) Space
var decode = function (s) {
  const delimiter = String.fromCharCode(257);

  return s.split(delimiter);
};




// console.log(String.fromCharCode(257));

// Method 3: Parsing by Pattern
// O(n) Time | O(1) Space
var encode = function (strs) {
  const output = [];

  for (const str of strs) {
    const encodedStr = str.length + '#' + str;

    output.push(encodedStr);
  }

  return output.join('');
};

// O(n) Time | O(1) Space
var decode = function (s) {
  const output = [];
  let left = 0;

  while (left < s.length) {
    let right = left;

    while (s[right] !== '#') {
      right++;
    }

    // left is at the start of the number and right is at the '#'
    const length = Number(s.slice(left, right));

    // right + 1: right pointer is at the '#' so we start slicing from right + 1
    const decodedString = s.slice(right + 1, right + 1 + length);

    output.push(decodedString);

    // move the left pointer to start of the next pattern
    left = right + 1 + length;
  }

  return output;
};


let test = ['Give', 'me', 'a', 'job!', 'Thank', 'you', ':)'];
const encodedString = encode(test);

console.log(encodedString);
console.log(decode(encodedString));

