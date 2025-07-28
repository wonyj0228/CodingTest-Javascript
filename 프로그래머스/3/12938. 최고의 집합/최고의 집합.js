function solution(n, s) {
    let answer = [];
    
    const mid = Math.floor(s/n);
    const remain = s%n;
    
    for (let i=0; i<n; i++) {
        answer.push(mid);
    }
    
    if (remain > 0) {
        let idx = 0;
        for (let i=0; i<remain; i++) {
            answer[idx]++;
            if (idx === n-1) {
                idx = 0;
            } else {
                idx++;
            }
        }
    }
    
    return answer.includes(0) ? [-1] : answer.sort();
}