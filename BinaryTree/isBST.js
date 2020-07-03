class Tree {
  constructor (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

var node1 = new Tree(3, null, null)
var node2 = new Tree(5, null, null)
var node3 = new Tree(8, null, null)
var node4 = new Tree(10, null, null)
var node5 = new Tree(4, node1, node2)
var node6 = new Tree(9, node3, node4)
var node7 = new Tree(6, node5, node6)

// isBST--是否为二叉搜索树
// min--二叉数的最小值
// max--二叉数的最大值
class Info {
  constructor (isBST, min, max) {
    this.isBST = isBST
    this.min = min
    this.max = max
  }
}

// process: 获取一颗树的信息 Info(isBST, min, max)
function process (node) {
  // 节点为空，没有信息需要返回
  if (node === null) {
    return null
  }

  var min = node.value
  var max = node.value
  var leftInfo = process(node.left)
  var rightInfo = process(node.right)

  if (leftInfo) {
    min = Math.min(leftInfo.min, min)
    max = Math.max(leftInfo.max, max)
  }
  if (rightInfo) {
    min = Math.min(rightInfo.min, min)
    max = Math.max(rightInfo.max, max)
  }
  var isBST = false
  var isOkLeft = (leftInfo !== null) ? leftInfo.isBST && leftInfo.max < node.value : true
  var isOkRight = (rightInfo !== null) ? rightInfo.isBST && rightInfo.min > node.value : true
  if (isOkLeft && isOkRight) {
    isBST = true
  }
  return new Info(isBST, min, max)
}

// 判断一棵树是否为二叉搜索树
function isBstTest (node) {
  return process(node).isBST
}

console.log(isBstTest(node7))
