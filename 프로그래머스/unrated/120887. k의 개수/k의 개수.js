function solution(i, j, k) {
    let answer = 0;
    for (let n = i; n <= j; n++) {
        if (String(n).includes(k)) {
            [...String(n)].forEach(v => { if (v == k) answer++})
        }
    }
    return answer;
}