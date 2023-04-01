def sliding_maximum(k, array)
  i = 0
  arr = []
  while k <= array.length
    max = array[i..k-1].max()
    arr << max
    i += 1
    k += 1
  end
  p arr
end

sliding_maximum(3, [1, 3, 5, 7, 9, 2])
# => [5, 7, 9, 9]
 sliding_maximum(4, [9, 3, 5, 1, 7, 10])
# => [9, 7, 10]
