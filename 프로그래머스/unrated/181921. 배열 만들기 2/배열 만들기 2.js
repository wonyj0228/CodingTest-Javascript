function solution(l, r) {
    var answer = [];
    for (i=l; i<=r; i++) {
        if ([...String(i)].filter(v => v === "0" || v=== "5").join('') === String(i) ) {
            answer.push(i);
        }
    }
    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}