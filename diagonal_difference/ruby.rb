def diagonalDifference(arr)
    # Write your code here
    dig1 = 0
    dig2 = 0

    arr.each_with_index do |a, i|
      dig1 += a[i]
      dig2 += a[a.length-1-i]
    end


    return (dig1 - dig2).abs
end

puts diagonalDifference([[1,2,30],[6,5,4],[7,8,9]])
