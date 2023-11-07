function solution(n) {
    const sqrt = Math.sqrt(n);
    return parseInt(sqrt) === Math.sqrt(n) ? (sqrt+1) * (sqrt+1) : -1;
}