function solution(intStrs, k, s, l) {
    const answer = [];
    intStrs.forEach(intStr => {
        intStr = parseInt(intStr.substr(s,l));
        if (intStr > k) answer.push(intStr);
    })
    return answer
}