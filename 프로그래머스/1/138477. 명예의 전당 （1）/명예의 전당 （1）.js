function solution(k, score) {
        const answer = [];
        const topList = [];
        
        score.forEach(v => {
            topList.push(v);
            topList.sort((a,b) => b-a);
            
            if(topList.length > k) {
                topList.pop();
            }
            answer.push(topList[topList.length-1]);
        })
        return answer;
}