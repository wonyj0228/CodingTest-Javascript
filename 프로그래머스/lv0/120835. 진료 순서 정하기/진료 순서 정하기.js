function solution(emergency) {
    const answer = emergency.slice();
    emergency.sort((a,b) => b-a);
    return answer.map(x => emergency.indexOf(x) + 1);
}