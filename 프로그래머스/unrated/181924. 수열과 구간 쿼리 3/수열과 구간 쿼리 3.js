function solution(arr, queries) {
    return queries.reduce((acc, cur, i) => {
       const a = acc[cur[0]];
        const b = acc[cur[1]];
        acc[cur[0]] = b;
        acc[cur[1]] = a;
        return acc
    }, arr)
}