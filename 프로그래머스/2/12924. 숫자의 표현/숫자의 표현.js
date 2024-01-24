function solution(n) {
    let answer = 0;
    let sum = 1;
    let i = 1;
    while(sum <= n) {
        if ((n - sum) % i === 0 ) {
            answer++
        }
        i++;
        sum += i;
    }
    return answer;
}