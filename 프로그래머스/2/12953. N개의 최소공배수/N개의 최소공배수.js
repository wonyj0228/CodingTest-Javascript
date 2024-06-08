function solution(arr) {
    const max = Math.max(...arr)
    let answer = max;
    
    while (!arr.every(v => answer % v === 0)) {
        answer += max;
    }
    
    return answer;
}