function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        const q = Math.floor(n/a);
        answer += b*q;
        n = n - a*q + b*q;
    }
    return answer;
}