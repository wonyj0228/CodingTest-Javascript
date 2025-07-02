function solution(triangle) {
    const dp = new Array(triangle.length);
    
    dp[0] = triangle[0];
    
    for (let i=1; i<triangle.length; i++) {
        const arr = new Array(i+1).fill(0);
        
        arr.forEach((_,idx) => {
            if (idx === 0) {
                arr[idx] = dp[i-1][0] + triangle[i][0];
            } else if (idx === i) {
                arr[idx] = dp[i-1][idx-1] + triangle[i][idx];
            } else {      
                arr[idx] = Math.max(dp[i-1][idx-1],dp[i-1][idx]) + triangle[i][idx];
                
            }
        })
        dp[i] = arr;
    }

    return Math.max(...dp.pop())
}