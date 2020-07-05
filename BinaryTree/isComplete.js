function isComplete (tree) {
  var queue = []
  queue.push(tree)

  while (queue.length > 0) {
    let head = queue.shift()
    let l = head.left
    let r = head.right
    let isMeet = false

    if ((l === null && r) || (isMeet && (l || r))) {
      return false
    }
    if (l) {
      queue.push(l)
    }
    if (r) {
      queue.push(r)
    }
    if (l === null || r === null) {
      isMeet = true
    }
  }
}
