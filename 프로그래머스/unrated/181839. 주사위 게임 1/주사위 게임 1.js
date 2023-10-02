function solution(a, b) {
    if (oddEven(a) === 0 && oddEven(b) === 0) {
        return a**2 + b**2
    } else if (oddEven(a)*oddEven(b) === 0) {
        return 2*(a+b)
    } else {
        return Math.abs(a-b)
    }
    
}

function oddEven(num) {
    return num%2 === 0 ? 1 : 0
}