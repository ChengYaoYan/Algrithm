class Node {
  constructor (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
}

var node1 = new Node(1, null, null)
var node2 = new Node(2, null, null)
var node3 = new Node(3, null, null)
node1.left = node2
node1.right = node3

// reconByPreString: 先序遍历方式序列化一棵二叉树
function reconByPreString (node) {
  var reconString = ''
  if (node === null) {
    return '#_'
  }

  reconString += node.value + '_'
  reconString += reconByPreString(node.left)
  reconString += reconByPreString(node.right)
  return reconString
}

// reconPre: 反序列化一棵二叉树
// parameter: `queue`--序列化队列
function reconPre (queue) {
  var value = queue.shift()

  if (value === '#') {
    return null
  }

  var node = new Node(value, null, null)
  node.left = reconPre(queue)
  node.right = reconPre(queue)
  return node
}

var queue = reconByPreString(node1).split('_').slice(0, -1)
console.log(reconPre(queue))
