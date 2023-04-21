const swap = (heap, i, j) => [heap[i], heap[j]] = [heap[j], heap[i]]

const maxCompare = (candidate, alternative) => candidate > alternative

const minCompare = (candidate, alternative) => candidate < alternative

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