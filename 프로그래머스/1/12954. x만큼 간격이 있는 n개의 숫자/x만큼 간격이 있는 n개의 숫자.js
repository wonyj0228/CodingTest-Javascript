function solution(x, n) {
    var answer = new Array(n).fill(x);
    
    return answer.map((v,i) => v + (v*i));
}