function solution(array, n) {
    return array.reduce((acc,cur) => {
        if (Math.abs(acc-n) > Math.abs(cur-n) || 
            (Math.abs(acc-n) === Math.abs(cur-n) && acc > cur)) acc = cur 
        return acc
    })
}