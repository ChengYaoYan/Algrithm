// n--节点的个数
// h--树的高度
class Info {
  constructor (n, h) {
    this.n = n
    this.h = h
  }
}

// process: 返回子树的信息
function process (node) {
  if (node === null) {
    return new Info(0, 0)
  }

  var leftInfo = process(node.left)
  var rightInfo = process(node.right)
  var n = leftInfo.n + rightInfo.n + 1
  var h = Math.max(leftInfo.h, rightInfo.h)

  return new Info(n, h)
}

// isFull: 判断一棵树是否为满二叉树
// 条件： n = 2**h - 1
function isFull (node) {
  var info = process(node)
  return (info.n === Math.pow(2, info.h) - 1)
}
