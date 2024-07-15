function solution(n, t, m, p) {
    let answer = '';
    let number = '';
    let curNum = -1;
    
    for (let i=p-1; i<=(p-1) + m*(t-1); i+=m) {
        while (!number[i]) {
            curNum++;
            number += curNum.toString(n);
        }
        answer += number[i];
        
    }
    return answer.toUpperCase();
}