function solution(score) {
    score = score.map(([eng,math]) => (eng+math) / 2);
    const rank = [...score].sort((a,b) => b-a);
    
    return score.map(v => rank.indexOf(v)+1)
}