function solution(array) {
    const obj = {};
    array.map(num => {
        Object.keys(obj).includes(num.toString()) ? obj[num] = obj[num]+1 : obj[num] = 1;
    })
    
    let max = 0;
    Object.values(obj).map(x => {if (x > max) max = x});
    
    const answer = Object.keys(obj).filter(key => obj[key] === max);
    return answer.length === 1 ? ~~answer[0] : -1
}