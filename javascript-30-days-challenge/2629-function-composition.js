/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  return function(x) {
    let output = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      const currFunc = functions[i];
      output = currFunc(output);
    }

    return output;
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
