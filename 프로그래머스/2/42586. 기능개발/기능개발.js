function solution(progresses, speeds) {
    const answer = [];
    
    const publish = progresses.map((progress, idx) => Math.ceil( (100 - progress) / speeds[idx]));
    
    let publishDay = 0;
    let publishCnt = 0;
    publish.forEach(day => {
        if (publishDay === 0) {
            publishDay = day;
            publishCnt++;
        } else if (publishDay > day) {
            publishCnt++;
        } else if (publishDay < day) {
            answer.push(publishCnt);
            publishDay = day;
            publishCnt = 1;
        } else if (publishDay === day) {
            publishCnt++;
        }
    })
    answer.push(publishCnt);

    return answer;
}