class Node {
  constructor (value, left, right, parent) {
    this.value = value
    this.left = left
    this.right = right
    this.parent = parent
  }
}

var node1 = new Node(1, null, null, null)
var node2 = new Node(2, null, null, node1)
var node3 = new Node(3, null, null, node1)
node1.left = node2
node1.right = node3

// subSequence: 找到某一个节点的后继节点（按照中序遍历序列）
function subSequence (node) {
  if (node === null) {
    return node
  }

  if (node.right !== null) {
    return findLeftMost(node.right)
  } else {
    let parent = node.parent
    while (parent !== null && parent.left !== node) {
      node = parent
      parent = node.parent
    }
    return parent
  }
}

function findLeftMost (node) {
  if (node === null) {
    return null
  }

  while (node.left) {
    node = node.left
  }
  return node
}

console.log(subSequence(node2))
