function solution(n) {
    return Array(n).fill(Array(n).fill(0)).map((arr,i) => arr.map((e,j) => i === j ? 1 : 0));
}