function solution(n) {
    let answer = n+1;
    const cnt = [...n.toString(2)].filter(v => v === '1').length;

    while (true) {
        if (cnt === [...answer.toString(2)].filter(v => v === '1').length) {
            break;
        } else {
            answer++;
        }
    }
    return answer;
}