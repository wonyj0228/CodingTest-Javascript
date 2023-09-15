function solution(ineq, eq, n, m) {
    let answer;
    if (ineq === ">" && eq === "=") {
        n >= m ? answer = 1 : answer = 0;
    } else if(ineq === ">" && eq === "!") {
        n > m ? answer = 1 : answer = 0;
    }  else if(ineq === "<" && eq === "=") {
        n <= m ? answer = 1 : answer = 0;
    }  else if(ineq === "<" && eq === "!") {
        n < m ? answer = 1 : answer = 0;
    } 
    return answer
}