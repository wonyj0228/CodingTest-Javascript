function solution(numbers) {
    const answer = [];
    let stack = [];

    for (let i=numbers.length-1; i>=0; i--) {
        
        const target = numbers[i];
        const idx = stack.findIndex((v) => target < v);
        
        // 찾는 수보다 큰 수가 없음
        if (idx === -1) {
            answer[i] = -1;
            stack = [target];
            
        // 찾는 수보다 큰 수가 있음
        } else {
            answer[i] = stack[idx];
            stack.splice(0,idx);
            
            if (stack[0] !== target) {
                stack.unshift(target);
            }
        }
    }

    return answer;
}