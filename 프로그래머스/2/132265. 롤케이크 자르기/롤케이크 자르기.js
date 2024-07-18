function solution(topping) {
    let answer = 0;
    
    let typeLen = [...new Set(topping)].length;
    const dict = {};
    
    topping.forEach((top) => {
        if (dict[top]){
            dict[top]++
        } else {
            dict[top] = 1;
        }
    })
    
    const brother = new Set();
    
    topping.forEach((top) => {
        brother.add(top);
        dict[top]--;
        if (dict[top]===0) typeLen--;
        if (brother.size === typeLen) answer++;
    })

    return answer
}