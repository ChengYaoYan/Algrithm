// findO1--是否找到O1, findO2--是否找到O2, node--最低公共祖先
class Info {
  constructor (findO1, findO2, node) {
    this.findO1 = findO1
    this.findO2 = findO2
    this.node = node
  }
}

function process (head, O1, O2) {
  if (head === null) {
    return new Info(false, false, null)
  }

  var leftInfo = process(head.left, O1, O2)
  var rightInfo = process(head.right, O1, O2)

  // 左子树当中找到最低公共祖先
  if (leftInfo.node) {
    return new Info(true, true, leftInfo.node)
  }
  // 右子树当中找到最低公共祖先
  if (rightInfo.node) {
    return new Info(true, true, rightInfo.node)
  }

  // 左子树找到O1, 右子树找到O2
  if (leftInfo.findO1 && rightInfo.findO2) {
    return new Info(true, true, head)
  }
  // 左子树找到O2，右子树找到O1
  if (leftInfo.findO2 && rightInfo.findO2) {
    return new Info(true, true, head)
  }

  // 左右子树只有一个找到O1或O2，或者两者都什么都没有找到
  // 判断head是否等于O1或O2，还是都不相等
  var findO1 = head === O1
  var findO2 = head === O2

  if (leftInfo.findO1 || rightInfo.findO1) {
    if (findO2) {
      return new Info(true, true, head)
    }
  }
  if (leftInfo.findO2 || rightInfo.findO2) {
    if (findO1) {
      return new Info(true, true, head)
    }
  }
  return new Info(findO1, findO2, null)
}
