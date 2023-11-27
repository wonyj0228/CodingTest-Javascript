function solution(s) {
    return [...s].map((v,i) => s.slice(0,i).lastIndexOf(v))
        .map((v,i) => v !== -1 ? i - v : v)
}