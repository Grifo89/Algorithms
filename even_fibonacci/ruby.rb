# F(n) = F(n - 1) + F(n - 2)
def even_fibonacci(n)
  a = 1
  b = 2
  s = 0
  t = 0
  while a <= n do
    t = a
    a = b
    b += t
    if t % 2 == 0
      s += t
    end
  end
  return s
end
