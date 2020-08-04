// value: 节点值
// ins: 入度
// outs: 出度
// nexts: 发散出去的节点的集合
// edges: 发散出去的边的集合
class Node {
  constructor (value, ins = 0, outs = 0, nexts = [], edges = []) {
    this.value = value
    this.ins = ins
    this.outs = outs
    this.nexts = nexts
    this.edges = edges
  }
}

module.exports = Node
