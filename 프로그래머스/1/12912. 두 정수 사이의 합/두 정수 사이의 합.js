function solution(a, b) {
    let answer = a;
    while (a !== b ) {
       a < b ? a++ : a--;
        answer += a;
    }
    return answer
}