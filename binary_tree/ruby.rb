def leftmost_nodes_sum(array)
  sum = array[0]
  return sum if array.length == 1
  i = 0
  while (2*i + 1) < array.length
    a = 2 * i + 1
    sum += array[a]
    i = a
  end
  return sum
end

# puts leftmost_nodes_sum([2, 7, 5, 2, 6, 0, 9])
# => 11
puts leftmost_nodes_sum([5, 3, 4, 11, 13, 15, 21, 10, 4, 7, 2, 8, 0, 9, 0])
# 29
# puts leftmost_nodes_sum([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0])
# 13
