class MaxHeap {
  constructor (data = []) {
    this.data = data
  }

  // 将元素添加到大根堆当中
  add (num) {
    this.data.push(num)
    let child = this.data.length - 1
    let parent = parseInt((child - 1) / 2)

    while (this.data[child] > this.data[parent]) {
      [this.data[child], this.data[parent]] = [this.data[parent], this.data[child]]

      child = parent
      parent = parseInt((child - 1) / 2)
    }
  }

  heapify () {
    // 堆顶元素和最后一个元素互换
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]]
    var heapTop = this.data.pop() // 堆顶元素弹出

    // 使剩下的部分成为大顶堆
    var parent = 0
    var maxChild = compare(this.data, this.data.length - 1, parent)

    while (this.data[parent] < this.data[maxChild]) {
      [this.data[parent], this.data[maxChild]] = [this.data[maxChild], this.data[parent]]

      parent = maxChild
      maxChild = compare(this.data, this.data.length - 1, parent)
    }

    return heapTop

    // 找出左右孩子的最大值的下标, 没有的话返回父亲的下标
    function compare (arr, size, parent) {
      var left
      var right
      if ((parent * 2 + 1) <= size) {
        left = parent * 2 + 1
      } else {
        left = parent
      }
      if ((parent * 2 + 2) <= size) {
        right = parent * 2 + 2
      } else {
        right = parent
      }
      return arr[left] >= arr[right] ? left : right
    }
  }

  // 传入一个数组，将其调整为一个大根堆后返回
  static create (data) {
    let heap = []
    for (let i = 0; i < data.length; i++) {
      add(heap, data[i])
    }

    return new MaxHeap(heap)

    function add (heap, num) {
      heap.push(num)
      let child = heap.length - 1
      let parent = parseInt((child - 1) / 2)

      while (heap[child] > heap[parent]) {
        [heap[child], heap[parent]] = [heap[parent], heap[child]]

        child = parent
        parent = parseInt((child - 1) / 2)
      }
    }
  }
}

class MinHeap {
  constructor (data = []) {
    this.data = data
  }

  // 将元素添加到小根堆当中
  add (num) {
    this.data.push(num)
    let child = this.data.length - 1
    let parent = parseInt((child - 1) / 2)

    while (this.data[child] < this.data[parent]) {
      [this.data[child], this.data[parent]] = [this.data[parent], this.data[child]]

      child = parent
      parent = parseInt((child - 1) / 2)
    }
  }

  heapify () {
    // 堆顶元素和最后一个元素互换
    [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]]
    var heapTop = this.data.pop() // 堆顶元素弹出

    // 使剩下的部分成为小顶堆
    var parent = 0
    var minChild = compare(this.data, this.data.length - 1, parent)

    while (this.data[parent] > this.data[minChild]) {
      [this.data[parent], this.data[minChild]] = [this.data[minChild], this.data[parent]]

      parent = minChild
      minChild = compare(this.data, this.data.length - 1, parent)
    }

    return heapTop

    // 找出左右孩子的最小值的下标, 没有的话返回父亲的下标
    function compare (arr, size, parent) {
      var left
      var right
      if ((parent * 2 + 1) <= size) {
        left = parent * 2 + 1
      } else {
        left = parent
      }
      if ((parent * 2 + 2) <= size) {
        right = parent * 2 + 2
      } else {
        right = parent
      }
      return arr[left] <= arr[right] ? left : right
    }
  }

  // 传入一个数组，将其调整为一个大根堆后返回
  static create (data) {
    let heap = []
    for (let i = 0; i < data.length; i++) {
      add(heap, data[i])
    }

    return new MinHeap(heap)

    function add (heap, num) {
      heap.push(num)
      let child = heap.length - 1
      let parent = parseInt((child - 1) / 2)

      while (heap[child] < heap[parent]) {
        [heap[child], heap[parent]] = [heap[parent], heap[child]]

        child = parent
        parent = parseInt((child - 1) / 2)
      }
    }
  .}
}

// 给exports对象赋值
module.exports = {
  MaxHeap: MaxHeap,
  MinHeap: MinHeap
}

// 给exports对象添加属性
// exports.MaxHeap = MaxHeap
// exports.MinHeap = MinHeap
