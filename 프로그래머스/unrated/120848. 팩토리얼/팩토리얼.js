function solution(n) {
    let i = 1;
    let maxNum = 1;
    while (i <= n) {
        maxNum++;
        i = i * maxNum;
    }
    return maxNum-1;
}