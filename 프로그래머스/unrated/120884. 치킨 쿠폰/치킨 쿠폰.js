function solution(chicken) {
    let answer = 0;
    while (chicken >= 10) {
        const service = Math.floor(chicken / 10);
        chicken = chicken%10 + service;
        answer += service;
    }
    return answer;
}