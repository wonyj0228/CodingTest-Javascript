function solution(priorities, location) {
    let answer = 0;

    while (priorities[location] !== -1) {
        for (let i=0; i<priorities.length; i++) {
            if (Math.max(...priorities) === priorities[i]) {
                priorities[i] = -1;
                answer++;

                if (priorities[location] === -1) {
                    break;
                }
            } 
        }
    }
    
    return answer;
}