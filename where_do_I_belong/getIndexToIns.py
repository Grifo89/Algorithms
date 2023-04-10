from typing import List

def getIndexToIns(arr: List, num: int) -> int:
    # 1. Sortin list
    # list.sort()
    for i in range(len(arr) - 1):
        for j in range(len(arr) - i -1):
            if arr[j + 1] < arr[j]:
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
    # 2. Looking the right num position
    for i in range(len(arr) - 1):
        if arr[i] >= num:
            return i 
    # 3. Return the last position if num is greater then all array's elements
    return len(arr)