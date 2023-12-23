function solution(ingredient) {
    let cnt = 0;
    const stack = [];
    
    ingredient.forEach((v) => {
        stack.push(v);
        const len = stack.length;
        
        if(stack[len-4] === 1 && stack[len-3] === 2 && stack[len-2] === 3 && stack[len-1] === 1 ) {
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
            cnt++;
        }
        
    })
    
    
    return cnt;
}