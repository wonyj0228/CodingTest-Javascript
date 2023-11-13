function solution(left, right) {
    function divisor(num) {
        const arr = [];
        for(i=1; i<= Math.sqrt(num); i++) {
            if (num % i === 0) {
                arr.push(i);
                if (i !== num/i) {
                    arr.push(num/i);
                }
            }
        }
        return arr.length;
    }
    
    return new Array(right-left+1)
        .fill(left)
        .reduce((acc,cur,i) => divisor(cur+i) % 2 === 0 ? acc + (cur+i) : acc - (cur+i), 0);
}