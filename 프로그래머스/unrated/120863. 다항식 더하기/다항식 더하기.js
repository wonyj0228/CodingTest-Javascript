function solution(polynomial) {
    const arr = polynomial.split(' + ');
    
    const x = arr.filter(v => v.includes('x'))
            .map(v => v.replace('x', ''))
            .reduce((acc,cur) => Number(cur) ? acc + Number(cur) : acc + 1 , 0);
    const num = arr.filter(v => !v.includes('x'))
            .reduce((acc,cur) => acc + Number(cur), 0);
    
    if (x && num) {
        return x === 1 ? "x + " + num : x + "x + " + num
    } else if (x && !num) {
        return x === 1 ? "x" : x + "x"
    } else if (!x && num) {
        return String(num)
    } else {
        return 0
    }
    
}