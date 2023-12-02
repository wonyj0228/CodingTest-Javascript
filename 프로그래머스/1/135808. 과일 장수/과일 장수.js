function solution(k, m, score) {
    let answer = 0;
    const minCost = score.sort((a,b) => b-a)
                        .filter((_,i) => (i+1) % m === 0);
    for (i = k; i>0; i--) {
        answer += m * i * (minCost.filter(v => v == i).length)
    }
    return answer
}