function solution(num, total) {
    let start = 0;
    if (num % 2 === 0) {
        start = (total / (num/2) - (num-1)) / 2;
    } else {
        start = total/num - Math.floor(num/2);
    }
    return Array(num).fill(1).map((_,i) => i + start);
}