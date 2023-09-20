function solution(numLog) {
    return numLog.reduce((acc,cur,i) => 
                         acc += cur-numLog[i-1] === 1 ? "w" 
                         : cur-numLog[i-1] === -1 ? "s" 
                         : cur-numLog[i-1] === 10 ? "d" 
                         : cur-numLog[i-1] === -10 ? "a" 
                         : "" ,"");
}