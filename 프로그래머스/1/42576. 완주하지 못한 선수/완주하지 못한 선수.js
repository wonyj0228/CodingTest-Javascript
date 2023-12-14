function solution(participant, completion) {
    participant.sort();
    completion.sort();
    let idx =0;
    for(let i=0; i<=participant.length; i++) {
        if (participant[i] !== completion[i]) {
            idx = i;
            break;
        }
    }
    return participant[idx];
}