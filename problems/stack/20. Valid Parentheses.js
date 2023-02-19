/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  const closeToOpen = { ')': '(', ']': '[', '}': '{' }
  const openBrackets = new Set(Object.values(closeToOpen))


  for (const char of s) {
    if (openBrackets.has(char)) stack.push(char);
    else if (closeToOpen.hasOwnProperty(char)) {
      const openBracket = stack.pop()
      if (closeToOpen[char] !== openBracket) return false
    }
  }

  return stack.length === 0
};