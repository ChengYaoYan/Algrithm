const MinHeap = require('./heapStructure').MinHeap

// 堆排序, 定义的是大根堆
function heapRank (arr) {
  var heap = MinHeap.create(arr)
  var result = []

  // heapify过程排序. 时间复杂度为O(logn), 即树的高度
  for (let i = arr.length - 1; i > 0; i--) {
    result.push(heap.heapify())
  }

  return result
}

console.log(heapRank([102, 90, 10, 12, 12, 1, 4, 8, 1000]))
