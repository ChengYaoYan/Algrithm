const Node = require('./Node')
const Edge = require('./Edge')
const Graph = require('./Graph')

// graphGenerator: 将有给的图结构转换为自己的图
//                  结构模板
//  matrix: 所给的图结构。
//  如下(第一列表示权重， 第二列表示起始位置， 第三列表示结束位置):
//  [
//    [7, 0, 1],
//    [2, 1, 2],
//    [5, 0, 2]
//  ]
function graphGenerator (matrix) {
  var nodes = new Map()
  var edges = new Set()

  for (let i = 0; i < matrix.length; i++) {
    const weight = matrix[i][0]
    const from = matrix[i][1]
    const to = matrix[i][2]

    if (!nodes.has(from)) {
      nodes.set(from, new Node(from))
    }
    if (!nodes.has(to)) {
      nodes.set(to, new Node(to))
    }

    const fromNode = nodes.get(from)
    const toNode = nodes.get(to)
    const newEdge = new Edge(weight, fromNode, toNode)
    fromNode.nexts.push(toNode)
    fromNode.outs++
    toNode.ins++
    fromNode.edges.push(newEdge)
    edges.add(newEdge)
  }

  return new Graph(nodes, edges)
}

module.exports = graphGenerator
