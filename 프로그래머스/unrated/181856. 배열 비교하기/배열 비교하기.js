function solution(arr1, arr2) {
    if (arr1.length === arr2.length) {
        const a1Sum = arr1.reduce((acc,cur) => acc += cur, 0);
        const a2Sum = arr2.reduce((acc,cur) => acc += cur, 0);
        if (a1Sum === a2Sum) {
            return 0
        } else {
            return a1Sum > a2Sum ? 1 : -1
        }
    } else {
        return arr1.length > arr2.length ?  1 :  -1
    }
}