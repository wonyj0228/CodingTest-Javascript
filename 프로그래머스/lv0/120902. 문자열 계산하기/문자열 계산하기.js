function solution(my_string) {
    return my_string.split(' ')
    .reduce((acc,cur,i,arr) => {
        if (i === 0) {acc = BigInt(cur)}
        else if (i % 2 === 1) {
            acc += BigInt(arr.slice(i, i+2).join(''))
        }
        return acc
    }, BigInt(0))
}