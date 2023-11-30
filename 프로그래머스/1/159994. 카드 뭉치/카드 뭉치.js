function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let flag = 0;
    const len = goal.length;
    
    for (i=0; i<len; i++) {
        if (i === 0) {
            if (!cards1.includes(goal[0])) flag = 1;
        }
        
        if (!flag) {
            if (cards1[0] !== goal[0]) {
                answer = 'No';
                break;
            }
            cards1.shift();
            goal.shift();
            if (cards1[0] !== goal[0] ) flag = 1;
        } else {
            if (cards2[0] !== goal[0]) {
                answer = 'No';
                break;
            }
            cards2.shift();
            goal.shift();
            if (cards2[0] !== goal[0]) flag = 0;
        }
    }
    return answer;
}