function solution(arr, queries) {
    queries.forEach(([s,e,k]) => arr.forEach((v,i) => {if (i >= s && i <= e && i % k ===0) { arr[i] += 1}}))
    return arr
}