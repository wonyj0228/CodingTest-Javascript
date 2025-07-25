function solution(A, B) {
    A.sort((a,b) => b-a);
    B.sort((a,b) => b-a);
    
    let answer = 0;
    
    A.forEach((num) => {
        if (num < B[0]) {
            B.shift();
            answer++;
        } else {
            B.pop();
        }
    })
    
    return answer;
}