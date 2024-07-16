function solution(n) {

    const arr = [1,2];
    for (let i=3; i<n; i++) {
        const [a,b] = arr;
        arr[0] = b;
        arr[1] = (a+b) % 1234567;
    }
    
    if (n === 1) {
        return 1
    } else if (n===2) {
        return 2
    } else {
        return (arr[0] + arr[1]) % 1234567;
    }
}