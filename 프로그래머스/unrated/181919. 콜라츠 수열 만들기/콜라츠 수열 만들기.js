function solution(n) {
    const arr = [n];
    let num = n;
    while (num !== 1) {
        num % 2 === 0 ? num = num/2 : num = 3*num + 1;
        arr.push(num);
    }
    return arr
}