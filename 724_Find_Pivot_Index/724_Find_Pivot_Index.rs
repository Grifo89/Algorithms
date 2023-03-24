fn pivotIndex(nums: Vec<i32>) -> i32 {
    let sum = nums.iter().sum::<i32>();
    let len = nums.len();
    let mut sumL: i32 = 0;

    for i in 0..len {
        if sumL == sum - sumL - nums[i] {
            return i as i32;
        }
        sumL += nums[i];
    }
    -1
}