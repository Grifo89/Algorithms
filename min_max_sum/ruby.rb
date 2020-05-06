def miniMaxSum(arr)
  arr.sort
  min_arr = arr.sort.clone
  max_arr = arr.sort.clone
  min_arr.pop
  max_arr.shift
  minN = min_arr.inject(0){|sum,x| sum + x}
  maxN = max_arr.inject(0){|sum,x| sum + x}
  print maxN
end

# miniMaxSum([1,2,3,4,5])
miniMaxSum([7, 69, 2, 221, 8974])
