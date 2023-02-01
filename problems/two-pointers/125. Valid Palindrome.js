/**
 * @param {string} s
 * @return {boolean}
 */


// two pointers: charCode
// O(n) Time | O(1) Space
var isPalindrome = function (s) {
  function isAlnum(char) {
    const aCharCode = 'a'.charCodeAt();
    const ACharCode = 'A'.charCodeAt();
    const zCharCode = 'z'.charCodeAt();
    const ZCharCode = 'Z'.charCodeAt();

    const isAlpha = (char) => {
      const isLowerAlpha = aCharCode <= char.charCodeAt() && char.charCodeAt() <= zCharCode;

      const isUpperAlpha = ACharCode <= char.charCodeAt() && char.charCodeAt() <= ZCharCode;

      return isLowerAlpha || isUpperAlpha;
    };

    const zeroCharCode = '0'.charCodeAt();
    const nineCharCode = '9'.charCodeAt();

    const isNum = (char) => zeroCharCode <= char.charCodeAt() && char.charCodeAt() <= nineCharCode;

    return isAlpha(char.toLowerCase()) || isNum(char);
  }


  let left = 0, right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlnum(s[left])) left++;
    while (left < right && !isAlnum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};


// two pointers: regex
// O(n) Time | O(1) Space
var isPalindrome = function (s) {
  // alt: const alnumRegex = /[a-z0-9]/i
  // alt: const alnumRegex = /[A-Z0-9]/i
  // alt: const alnumRegex = /[a-z\d]/i
  const alnumRegex = /[a-zA-Z0-9]/;

  let left = 0, right = s.length - 1;

  while (left < right) {
    while (left < right && !alnumRegex.test(s[left])) left++;
    while (left < right && !alnumRegex.test(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};

// console.log('a'.charCodeAt());

// console.log('a'.toUpperCase());
