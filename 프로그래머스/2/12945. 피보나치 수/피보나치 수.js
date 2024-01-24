function solution(n) {
    const arr = [0,1];
    
    for (i=2; i<=n; i++) {
        arr.push((arr[i-2] + arr[i-1]) % 1234567);
    }
    
    return arr[n]
}