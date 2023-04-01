def sum(n)
  return n if n < 1
  n + sum(n - 1)
end

puts sum(4)
puts sum(10)
