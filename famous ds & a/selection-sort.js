// t: n^2 | s: 1
function selectionSort(array) {
  const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];
  
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;
