function solution(n) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        let tmpNum = answer + 1;
        while (String(tmpNum).includes("3") || tmpNum % 3 === 0) {
            tmpNum++;
        }
        answer = tmpNum;
    }
    return Number(answer)
}