function solution(s) {
    const arr = s.split('},')
                .reduce((acc,cur) => {
                    acc.push(cur.replaceAll(/[{}]/g, '')); 
                    return acc
                },[])
                .sort((a,b) => {
                    return a.length < b.length ? -1 : 1
                });
    
    const answer = [];
    arr.forEach(str => {
        let tmp = str.split(',').filter(v => !answer.includes(Number(v)));
        answer.push(Number(...tmp)); 
    })
    return answer;
}