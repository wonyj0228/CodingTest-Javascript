function solution(nums) {
    const len = nums.length / 2;
    nums = [...new Set(nums)];
    return nums.length < len ? nums.length : len;
}