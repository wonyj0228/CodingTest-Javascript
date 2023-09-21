function solution(arr, queries) {
    const acc = [];
    queries.forEach(query => {
        const cur = arr.slice(query[0], Number(query[1])+1).filter(x => x > Number(query[2]));        
        if (cur.length === 0) {
            acc.push(-1)
        } else {
            acc.push(Math.min(...cur))
        }
    })
    return acc
}