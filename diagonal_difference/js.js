function diagonalDifference(arr) {
    // Write your code here
    let dig1 = 0
    let dig2 = 0
    arr.forEach((a, i) => {
        dig1 += a[i]
        dig2 += a[a.length-1-i]
    })

    return Math.abs(dig1 - dig2)
}

console.log(diagonalDifference([[1,2,30],[6,5,4],[7,8,9]]));
