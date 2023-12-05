function solution(nums) {
    const sumList= [];
    for (i=0; i<nums.length; i++) {
        for (j=i+1; j<nums.length; j++) {
            for (z=j+1; z<nums.length; z++) {
                const sum = nums[i]+nums[j]+nums[z];
                sumList.push(sum);
            }
        }
    }
    return sumList.filter(v => {
        let check = true;
        for (i=2; i<=v/2; i++) {
            if (v % i === 0) {
                check = false;
                break;
            } 
        }
        return check
    }).length;
}