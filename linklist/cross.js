class Node {
  constructor (value, next) {
    this.value = value
    this.next = next
  }
}

// hasRing: 判断链表是否有环
//  返回值：  有环--返回入环节点，无环--返回null
function hasRing (head) {
  if (head === null) {
    return null
  }

  var fast = head
  var slow = head

  while (fast) {
    if (fast.next === null || fast.next.next === null) {
      return null
    }

    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      fast = head
      while (fast !== slow) {
        fast = fast.next
        slow = slow.next
      }
      return fast
    }
  }
}

// isCross: 判断两个链表是否相交
//  返回值：  是--相交的起始节点，否--null
function isCross(la, lb) {
  if (la === null || lb === null) {
    return null
  }

  var heada = la
  var headb = lb

  if (hasRing(heada) === null && hasRing(headb) === null) {
    let n = 0

    while (heada.next) {
      ++n
      heada = heada.next
    }
    while (headb.next) {
      --n
      headb = headb.next
    }

    // 尾节点不相等，说明链表不相交
    // 相等则说明相交
    if (heada !== headb) {
      return null
    } else {
      // heada指向较长链表的头节点
      if (n >= 0) {
        heada = la
        headb = lb
      } else {
        heada = lb
        headb = la
      }

      n = Math.abs(n)
      while (n-- > 0) {
        heada = heada.next
      }
      while (heada !== headb) {
        heada = heada.next
        headb = headb.next
      }

      return heada
    }
  } else if (hasRing(heada) && hasRing(headb)) {
    const entera = hasRing(heada)
    const enterb = hasRing(headb)
    let temp = entera.next

    if (entera === enterb) {
      return entera
    }

    while (temp !== entera) {
      if (temp === enterb) {
        return entera
      }
      temp = temp.next
    }

    return null
  } else {
    return null
  }
}

// hasRingTwo: 判断链表是否有环，使用set实现
//  返回值: 无--null，有--入环节点
function hasRingTwo (head) {
  if (head === null) {
    return null
  }

  var h = head
  var set = new Set()

  while (h) {
    if (set.has(h)) {
      return h
    }
    set.add(h)
    h = h.next
  }
}