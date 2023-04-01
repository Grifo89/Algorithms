def sqrt(number)
  sqrt_recursive(number, 0, number)
end

def sqrt_recursive(number, min_interval, max_interval)
  return number if number == 0 || number == 1
  ans = 0
  start = min_interval
  end_ = max_interval
  while start <= end_ do
    mid = (start + end_)/2
    return mid if mid * mid == number
    if mid * mid < number
      start = mid + 1
      ans = mid
    else
      end_ = mid - 1
    end
  end
  return end_
end

puts sqrt(25)
puts sqrt(7056787676898798798)
