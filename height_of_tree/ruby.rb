def binary_tree_height(array_tree)
  n = array_tree.length
  i = 0
  while 2**i <= n
    i += 1
  end
  return i
end

puts binary_tree_height([2, 7, 5, 2, 6, 0, 9])
# # => 3
puts binary_tree_height([1, 7, 5, 2, 6, 0, 9, 3, 7, 5, 11, 0, 0, 4, 0])
# # 4
puts binary_tree_height([5, 3, 2, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 5, 0])
# # 4
puts binary_tree_height([1, 2, 3, 4, 0, 5, 6, 7, 8, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0])
#5
