function solution(s1, s2) {
    const answer = [];
    s1.forEach(item1 => {
        s2.forEach(item2 => {
            if (item1 === item2) {answer.push(item1);}
        })
    })
    return answer.length
}