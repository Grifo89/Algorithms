function restock(itemCount, target) {
    // Write your code here
    let sum = 0
    let large = itemCount.length
    let i = 0
    while( i < large && sum < target){
      sum += itemCount[i]
      i++
    }
    if (i == large) {
      return Math.abs(target - sum)
    } else {
      return Math.abs(sum - target)
    }
}

restock([6,1,2,1], 100)
restock([1,2,3,2,1], 4)
