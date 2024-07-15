function solution(n, k) {
    const arr = n.toString(k).split('0').filter(v => v !== '' && v !== '1');
    
    function isPrime(num) {
        for (let i=2; i<= Math.sqrt(num); i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    return arr.filter(v => isPrime(Number(v))).length
}