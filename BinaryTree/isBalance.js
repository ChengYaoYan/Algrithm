// isBalance--是否为平衡二叉树
// h--二叉树的高度
class Info {
  constructor (isBalance, h) {
    this.isBalance = isBalance
    this.h = h
  }
}

function process (node) {
  if (node === null) {
    return new Info(true, 0)
  }

  var leftInfo = process(node.left)
  var rightInfo = process(node.right)
  var h = Math.max(leftInfo.h, rightInfo.h)
  var isBalance = leftInfo.isBalance && rightInfo.isBalance && Math.abs(leftInfo.h - rightInfo.h) <= 1

  return new Info(isBalance, h)
}

// isBalanceTest: 判断一棵二叉树是否为平衡二叉树
function isBalanceTest(node) {
  return process(node).isBalance
}
