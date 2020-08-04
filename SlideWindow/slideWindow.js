// 常见的固定滑动窗口的大小，求每个窗口的最大值问题

function maxInWindows (num, size) {
  // write code here
  if (num.length < size || size === 0) {
    return []
  }

  let query = [] // 存放着数值从左向右依次递减值的index
  const res = []
  for (let i = 0; i < num.length; i++) {
    // 滑动窗口向右增长时:
    while (query.length !== 0 && num[i] >= num[query[query.length - 1]]) {
      query.pop()
    }
    query.push(i)
    if (i >= size) {
      // 滑动窗口从左向右收缩时:
      query = query.filter(item => item > i - size)
    }
    // 滑动窗口来到预期的大小，开始收集最大值
    if (i >= size - 1) {
      res.push(num[query[0]])
    }
  }
  return res
}
