function solution(order) {
    let answer = 0;
    
    const container = [];
    let curBelt = 1;
    
    for (let i=0; i<order.length; i++) {
        const box = order[i];

        if (box !== curBelt) {
            if (box > curBelt) {
                while (curBelt !== box) {
                    container.push(curBelt);
                    curBelt++;
                };
                answer++;
                curBelt++;
            } else {
                if (container[container.length-1] === box) {
                    container.pop();
                    answer++;
                } else {
                    break;
                }
            }
        } else {
            answer++;
            curBelt++;
        }
    }
    
    return answer;
}