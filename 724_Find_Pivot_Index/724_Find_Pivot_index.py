def pivotIndex(array: List[int]) -> int:
    S = sum(array)
    sumL = 0
    for idx, item in enumerate(array):
        sumR = S - item - sumL
        if sumL == sumR:
            return idx
        sumL += item 
    return -1
