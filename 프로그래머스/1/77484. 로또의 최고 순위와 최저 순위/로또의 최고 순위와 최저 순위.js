function solution(lottos, win_nums) {
    const rightNum = lottos.filter(v =>  v !== 0 && win_nums.includes(v)).length
    const randomNum = lottos.filter(v => v===0).length
    
    let maxRank = 7-rightNum-randomNum;
    let minRank = 7-rightNum;
    if (maxRank === 7) maxRank = 6;
    if (minRank === 7) minRank = 6;
    return [maxRank, minRank];
}