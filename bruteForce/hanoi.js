function hanoi (n, from, to, other) {
  if (n === 1) {
    console.log(`move ${n} from ${from} to ${to}`)
    return
  }
  hanoi(n - 1, from, other, to)
  console.log(`move ${n} from ${from} to ${to}`)
  hanoi(n - 1, other, to, from)
}

hanoi(3, 'a', 'b', 'c')
