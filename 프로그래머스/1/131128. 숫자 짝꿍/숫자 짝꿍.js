function solution(X, Y) {
    X = [...X];
    Y = [...Y];
    const xNum = new Array(10).fill(0);
    const yNum = new Array(10).fill(0);
    
    X.forEach(v => {
        xNum[v]++;
    })
    Y.forEach(v => {
        yNum[v]++;
    })
    
    let answer = xNum.map((v,i) => Math.min(v, yNum[i]))
                        .reverse()
                        .reduce((acc,cur,idx) => acc +=String(9-idx).repeat(cur),"");
    
    if (answer === "") {
        answer = "-1"
    } else if (answer[0] === "0") {
        answer = "0"
    }
    return answer
}