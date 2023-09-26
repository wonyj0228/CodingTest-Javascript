function solution(arr) {
    return arr.reduce((acc, cur) => {
        for (i=1; i<= cur; i++) {
            acc.push(cur)
        }
        return acc
    }, []);
}