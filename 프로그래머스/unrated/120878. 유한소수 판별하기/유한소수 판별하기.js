function solution(a, b) {
    const gcdFnc = (x, y) => x % y === 0 ? y : gcdFnc(y, x % y);
    const gcd = gcdFnc(a,b);
    
    b = b/gcd;
    
    let idx = 2;
    const arr = [];
    while (idx <= b) {
        if (b % idx === 0) {
            arr.push(idx)
        }
        idx++;
    }
    
    return arr.every(num => num % 2 === 0 || num % 5 === 0 || num % 10 === 0) ? 1 : 2
}