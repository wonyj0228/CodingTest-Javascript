function solution(A,B){
    let answer = 0;
    
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    while(A.length !== 0) {
        answer += A[0] * B[0];
        A.shift();
        B.shift();
    }
    
    return answer;
}