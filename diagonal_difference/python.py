
def diagonalDifference(arr):
    # Write your code here
    dig1 = 0
    dig2 = 0

    for i, a in enumerate(arr):
        dig1 += a[i]
        dig2 += a[len(a)-1-i]

    return abs(dig1 - dig2)

max = [[1,2],[2,9]]
print diagonalDifference(max)
