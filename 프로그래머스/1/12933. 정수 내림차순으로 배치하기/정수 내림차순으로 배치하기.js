function solution(n) {
    return parseInt([...n.toString()].map(v => parseInt(v)).sort((a,b) => b-a).join(''));
}