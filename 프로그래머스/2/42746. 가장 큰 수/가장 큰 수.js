function solution(numbers) {
    numbers.sort((a,b) => {
       const A = a + "" + b;
       const B = b + "" + a;
        if (A >= B) {
           return -1
        } else {
            return 1
        }
    });
    
    return numbers.every(v => v === 0) ? "0" : numbers.join('');
}