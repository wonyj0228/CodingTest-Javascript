function solution(arr) {
    let num = 1;
    while (num < arr.length) {
        num *= 2;
    }
    return [...arr, ...Array(num-arr.length).fill(0)];
}