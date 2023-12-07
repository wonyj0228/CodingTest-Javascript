function solution(n, m, section) {
    let cnt = 1;
    let max = section[0] + m - 1;
    
    section.forEach(v => {
        if (v > max) {
            cnt++;
            max = v+m-1;
        }
    })
    return cnt
}