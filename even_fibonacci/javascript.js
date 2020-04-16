function even_fibonacci(n) {
  let a = 1
  let b = 2
  let s = 0
  let t = 0
  while (a <= n) {
    t = a
    a = b
    b += t
    if (t % 2 === 0) {
      s += t
    }
  }
  return s;
}
