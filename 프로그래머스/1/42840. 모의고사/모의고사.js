function solution(answers) {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let [score1, score2, score3] = [0,0,0];
    answers.forEach((v,i) => {
        if (arr1[i % arr1.length] === v) score1++;
        if (arr2[i % arr2.length] === v) score2++;
        if (arr3[i % arr3.length] === v) score3++;
    })
    
    const maxScore = Math.max(score1,score2,score3);
    return [score1,score2,score3].reduce((acc,cur,i) => {
        if (cur === maxScore) acc.push(i+1);
        return acc
    } , []);
}