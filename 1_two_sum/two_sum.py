def twoSum(nums, target):
    prevMap = {} # val : index

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i
    return

def twoSum2(nums, target):
    a=[]
    for i in nums:
        for j in range(nums.index(i)+1, len(nums)):
            if i+nums[j] == target:
                a.append(nums.index(i))
                a.append(j)
                return a