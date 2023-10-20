function solution(n) {
    var answer = [];
    let prime = 2;
    while (n !== 1) {
        if (n % prime === 0) {
            answer.push(prime);
            n = n/prime;
        }
        prime = nextPrime(prime, n);
    }
    return [...new Set(answer)];
}

function nextPrime(curPrime, n) {
    for(let i = curPrime; i <= n; i++) {
        if (n % i === 0) {
            return i;
        }
    }
}