// t: n^2 | s: 1
function bubbleSort(array) {
  // Write your code here.
  const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

  let done = false;
  let end = array.length - 1

  while (!done) {
    done = true;
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        done = false;
      }
    }
    end--;
  }

  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;
