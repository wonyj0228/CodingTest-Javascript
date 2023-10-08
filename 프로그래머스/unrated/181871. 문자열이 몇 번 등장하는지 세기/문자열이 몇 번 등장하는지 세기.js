function solution(myString, pat) {
    return [...myString].reduce((acc,cur,i,arr) => {
        if (cur === pat[0]) {
            if (arr.slice(i,i+pat.length).join('') === pat) acc++;
        }
    return acc},0);
}