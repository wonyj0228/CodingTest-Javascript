function solution(d, budget) {
    d = d.sort((a,b) => a-b);
    let cnt = 0;
    for(i=0; i<d.length; i++) {
        if (budget-d[i] >= 0 ) {
            budget -= d[i];
            cnt++;
        }
    }
    return cnt;
}