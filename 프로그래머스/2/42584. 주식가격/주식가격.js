function solution(prices) {
    const answer = [];
    const len = prices.length;
    
    for (let i=0; i<len; i++) {
        if (i === len-1) {
            answer.push(0);
            break;
        }
        
        let second = 0;
        for (let j=i; j<len; j++) {
            if (j === len-1) {
                break;
            }
            if (prices[i] > prices[j]) {
                break;
            } else {
                second++;
            }
        }
        answer.push(second);
    }
    
    return answer;
}