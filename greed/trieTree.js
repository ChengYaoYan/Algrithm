// 前缀树中的节点
// `pass` 通过节点的次数
// `end` 路径的条数
// `next` 可能的路径
// 在此假设用户所输入的字符串全部由小写字母组成，
class TrieNode {
  constructor (pass, end, next) {
    this.pass = pass
    this.end = end
    this.next = next
  }
}

// insert: 将单词插入到前缀树当中
function insert (word, root) {
  if (!word) {
    // eslint-disable-next-line no-useless-return
    return
  }

  root.pass++
  var path = 0
  var node = root
  // 遍历word
  for (let i = 0; i < word.length; i++) {
    path = word.charCodeAt(i) - 97
    // 如果next当中没有word[i]则创建新的节点
    if (node.next[path] === undefined) {
      node.next[path] = new TrieNode(0, 0, new Array(26))
    }
    node = node.next[path]
    node.pass++
  }
  // 便利完word，将end++，及增加了一条路径
  node.end++
}

// search: 查询一个字符串在的出现的次数
function search (word, root) {
  if (!word) {
    return 0
  }

  var path = 0
  var node = root
  // 遍历word
  for (let i = 0; i < word.length; i++) {
    path = word.charCodeAt(i) - 97
    // 如果next当中没有word[i], 说明word不存在，返回0
    if (node.next[path] === undefined) {
      return 0
    }
    node = node.next[path]
  }
  return node.end
}

// prefixWord: 查询word为前缀的字符串的个数
function prefixWord (word, root) {
  if (!word) {
    return 0
  }

  var path = 0
  var node = root
  // 遍历word
  for (let i = 0; i < word.length; i++) {
    path = word.charCodeAt(i) - 97
    // 如果next当中没有word[i], 说明以word为前缀的字符串不存在
    if (node.next[path] === undefined) {
      return 0
    }
    node = node.next[path]
  }
  return node.pass
}

// deleteWord: 删除字符串word
function deleteWord (word, root) {
  // 确保要删除的字符串存在
  if (search(word, root) !== 0) {
    let path = 0
    let node = root
    // 遍历word
    for (let i = 0; i < word.length; i++) {
      path = word.charCodeAt(i) - 97
      // 字符串在前缀树中被全部删除，则删除其节点
      if (--node.next[path].pass === 0) {
        // 这里关于undefined的使用有一些感觉不是很好的地方
        node.next[path] = undefined
        return
      }
      node = node.next[path]
    }
  }
}
