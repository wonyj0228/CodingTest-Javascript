function solution(numbers, k) {
    let cnt = (2*k - 1) % numbers.length;
    cnt = cnt === 0 ? numbers.length-1 : cnt -1;
    return numbers[cnt]
}