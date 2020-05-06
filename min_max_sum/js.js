function miniMaxSum(arr) {
  arr.sort()
  let minArr = arr.slice()
  let maxArr = arr.slice()
  minArr.pop()
  maxArr.shift()
  let min = minArr.reduce((a, b) => a + b, 0)
  let max = maxArr.reduce((a, b) => a + b, 0)
  console.log(min, max)
}

console.log(miniMaxSum([1,2,3,4,5]));
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
