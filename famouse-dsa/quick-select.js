function quickSelect(array, targetIdx) {
  const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

  // pivotVal: array[pivotIdx] | newIdx: where the pivotVal falls into if the array was sorted (from leftIdx to rightIdx)
  // moves numbers smaller than pivotVal to the left of newIdx and bigger numbers to the right
  function partition(leftIdx, rightIdx, pivotIdx) {
    // keeps track of the element value at pivotIdx
    const pivotVal = array[pivotIdx];

    // this function will loop from [leftIdx, rightIdx) (left inclusive | right exclusive) and swap elements
    // to make sure we only compare numbers in between left and right EXCEPT the pivotVal, we put it in a "safe spot" (rightIdx because it won't be part of the for loop)
    swap(array, pivotIdx, rightIdx);

    let newIdx = leftIdx;

    for (let i = leftIdx; i < rightIdx; i++) {
      // if we see a smaller number than the pivotVal, "toss" it to the left side of the newIdx before incrementing the newIdx to make sure the smaller value stays on the left side
      if (array[i] < pivotVal) {
        swap(array, i, newIdx);
        newIdx++;
      }
    }

    // if the pivotVal was placed at newIdx, values to the left will be smaller and bigger to the right
    // since we put the pivotVal at the rightIdx ("safe spot"), we can put it back where it belongs
    swap(array, rightIdx, newIdx);

    return newIdx;
  }

  function select(leftIdx, rightIdx, targetIdx) {
    if (leftIdx >= rightIdx) {
      return array[leftIdx];
    }

    // you can use any number in between leftIdx and rightIdx (BOTH EXCLUSIVE) as the guessIdx
    const guessIdx = leftIdx + 1;

    const pivotIdx = partition(leftIdx, rightIdx, guessIdx);

    if (pivotIdx === targetIdx) {
      return array[pivotIdx];
    } else if (pivotIdx < targetIdx) {
      return select(pivotIdx + 1, rightIdx, targetIdx);
    } else {
      return select(leftIdx, pivotIdx - 1, targetIdx);
    }
  }

  return select(0, array.length - 1, targetIdx);
}

console.log(quickSelect([5, 1, 2, 3, 4], 2)); // 3