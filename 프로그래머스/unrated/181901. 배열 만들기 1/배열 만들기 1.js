function solution(n, k) {    
    return new Array(n).fill().map((v,i) => {return i+1}).filter(v=>v%k===0)
}