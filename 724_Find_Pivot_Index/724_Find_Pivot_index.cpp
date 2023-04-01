int pivotIndex(vector<int>& nums) {
    int sum=0, sumL=0, i=0;
    for( const int& num : nums ) sum += num;
    for( const int& num : nums ) 
    {
        if (sumL == sum - sumL - num) return i;
        sumL += num
        i++;
    }
    return -1;
}