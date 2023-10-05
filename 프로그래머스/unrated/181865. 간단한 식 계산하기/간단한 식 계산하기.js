function solution(binomial) {
    let [a, op, b] = binomial.split(' ');
    a = BigInt(a);
    b = BigInt(b);
    
    if (op === "+") {
        return a+b
    } else if (op === "-") {
        return a-b
    } else if (op === "*") {
        return a*b
    }
}