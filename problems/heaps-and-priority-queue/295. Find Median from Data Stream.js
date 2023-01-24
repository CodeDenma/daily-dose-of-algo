class Heap {
  constructor(array, compare) {
    this.compare = compare
    this.heap = this.heapify(array)
    this.length = array.length
  }

  heapify(array) {
    const endIdx = array.length - 1
    const firstParentIdx = Math.floor((endIdx - 1) / 2)

    for (let parentIdx = firstParentIdx; parentIdx >= 0; parentIdx--) {
      this.siftDown(array, parentIdx, endIdx)
    }

    return array
  }
  
  siftDown(heap, parentIdx, endIdx) {
    let childOneIdx = parentIdx * 2 + 1
    let childTwoIdx, idxToSwap

    while (childOneIdx <= endIdx) {
      parentIdx * 2 + 2 <= endIdx ? childTwoIdx = parentIdx * 2 + 2 : childTwoIdx = -1

      if (childTwoIdx !== -1 && this.compare(heap[childTwoIdx], heap[childOneIdx])) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }

      if (this.compare(heap[idxToSwap], heap[parentIdx])) {
        swap(heap, idxToSwap, parentIdx)
        parentIdx = idxToSwap
        childOneIdx = parentIdx * 2 + 1
      } else {
        return
      }
    }
  }

  peek() {
    return this.heap[0]
  }

  heappush(value) {
    this.heap.push(value)
    this.length++
    this.siftUp(this.heap, this.length - 1)
  }

  siftUp(heap, childIdx) {
    let parentIdx = Math.floor((childIdx - 1) / 2)

    while (childIdx > 0 && this.compare(heap[childIdx], heap[parentIdx])) {
      swap(heap, childIdx, parentIdx)
      childIdx = parentIdx
      parentIdx = Math.floor((childIdx - 1) / 2)
    }
  }

  heappop() {
    swap(this.heap, 0, this.length - 1)
    const poppedItem = this.heap.pop()
    this.length--

    this.siftDown(this.heap, 0, this.length - 1)

    return poppedItem
  }
}


const maxCompare = (candidate, alternative) => candidate > alternative

const minCompare = (candidate, alternative) => candidate < alternative

const swap = (heap, i, j) => [heap[i], heap[j]] = [heap[j], heap[i]]


// Split the array into two sections: smaller and bigger heaps
  // make sure there is about the same number of elements in smaller and bigger by continuously rebalancing the heaps at every insertion

// computing the median
  // if there's odd number of elements
    // if there are more elements in smaller, set the median to the max value of smaller
    // if there are more elements in bigger, set the median to the min value of bigger
  // if there's even number of elements
    // set the median to the average between smallerMax and biggerMin
var MedianFinder = function () {
  this.smaller = new Heap([], maxCompare);
  this.bigger =  new Heap([], minCompare);
  this.median = null
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.smaller.length === 0 || num < this.smaller.peek()) {
    this.smaller.heappush(num)
  } else {
    this.bigger.heappush(num)
  }
  
  this.rebalance()
  this.updateMedian()
};

MedianFinder.prototype.rebalance = function() {
  if (this.smaller.length - this.bigger.length === 2) {
    const popped = this.smaller.heappop()
    this.bigger.heappush(popped)
  } else if (this.bigger.length - this.smaller.length === 2) {
    const popped = this.bigger.heappop()
    this.smaller.heappush(popped)
  }
}

MedianFinder.prototype.updateMedian = function() {
  if (this.smaller.length > this.bigger.length) {
    this.median = this.smaller.peek()
  } else if (this.bigger.length > this.smaller.length) {
    this.median = this.bigger.peek()
  } else {
    const leftMedian = this.smaller.peek()
    const rightMedian = this.bigger.peek()

    this.median = (leftMedian + rightMedian) / 2
  }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  return this.median
};