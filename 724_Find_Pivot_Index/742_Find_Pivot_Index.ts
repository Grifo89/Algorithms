const pivotIndex = (nums: Array<number>): number => {
    let S: number = nums.reduce((x,y) => x + y)
    let sumL = 0
    for(let i: number = 0; i < nums.length; i++) {
        if (sumL === (S - nums[i] - sumL)) return i
        sumL += nums[i]
    }
    return -1
}